import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../components/FormField';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { socket } from '../services/sockets';
import styles from '../styles/styles.scss';

class AddUserContainer extends Component {
	constructor(props){
    super(props);
		this.state = {
			user: '',
		};

		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
   } 

	componentDidMount(){
		this.handleUsersEvent();
	}

	handleOnChange(e) {
		this.setState({ user: e.target.value });
	}

	handleOnSubmit(e) {
		e.preventDefault();
		const { user } = this.state;
	
		this.props.actions.addNewUser(user);
		this.props.history.push(`/chat/${user}`);
		this.setState({ user: '' });
	}

	handleUsersEvent(){
		socket.on('add user', ({ user, userId }) => {
			const foundUser = this.props.users.find(user => user.id === userId);
			if (!foundUser) {
				this.props.actions.addUser(user, userId);
			}
		});
	}

	render() {
		return (
			<div className={styles.addUserContainer}>
				<FormField
					value={this.state.user}
					onChange={this.handleOnChange}
					onClick={this.handleOnSubmit}
					placeholder="Add user"
					formStyle={styles.formStyle}
					buttonStyle={styles.addNewUserButton}
					inputStyle={styles.addNewUserInput}
				/>
			</div>
		);
	}
}

AddUserContainer.propTypes = {
	actions: PropTypes.object,
	history: PropTypes.object,
	users: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
	return {
		messages: state.messages,
		users: state.users
	};
 };

const mapDispatchToProps = (dispatch) => {
  return {
	actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
