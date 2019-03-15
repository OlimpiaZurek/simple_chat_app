import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../components/FormField';
import MessagesList from '../components/MessageList';
import Users from '../components/Users';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import styles from '../styles/styles.scss';
import { socket } from '../services/sockets';

class ChatContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: '',
    	messages: props.messages,
		};

		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	componentDidMount(){
		this.handleMessageEvent();

		if(!this.props.user) {
			this.props.history.push('/');
		}
	}

	handleOnChange(e) {
		this.setState({ message: e.target.value });
	}

	handleOnSubmit(e) {
		e.preventDefault();
		const { message } = this.state;
		const { user } = this.props;
		this.props.actions.addNewMessage(message, user.name, true);
		this.setState({ message: '' });
	}

	handleMessageEvent(){
		socket.on('message', ({ message, author, id }) => {
			const findMessage = this.props.messages.find(message => message.id === id);
			if(!findMessage) {
				this.props.actions.messageReceived(message, author, false, id);
			}
		});
	}

	render() {
		return (
			<div className={styles.container} >
				<Users  users={this.props.users} />
				<section className={styles.main}>
					<MessagesList  messages={this.props.messages} />
					<FormField
						value={this.state.message}
						onChange={this.handleOnChange}
						onClick={this.handleOnSubmit}
						placeholder="Send"
						message
						buttonStyle={styles.messageButton}
						inputStyle={styles.messageInput}
					/>
				</section>
			</div>
		);
	}
}

ChatContainer.propTypes = {
  messages: PropTypes.array,
  users: PropTypes.array,
  actions: PropTypes.object,
  user: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
	const name = ownProps.match.params.name;
	const user = state.users.find(user => user.name === name);
	return {
		messages: state.messages,
		users: state.users,
		user
	};
 };

const mapDispatchToProps = (dispatch) => {
  return {
	actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);

