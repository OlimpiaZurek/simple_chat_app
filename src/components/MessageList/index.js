/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/index';
import style from './style.scss';

class MessagesList extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
   this.messagesListEnd.scrollIntoView();
  }

  render() {
    return (
      <section className={style.messagesList} >
        <ul className={style.messageListItems}>
          {this.props.messages.map(message => (
            <Message
              key={message.id}
              {...message}
            />
        ))}
        </ul>
        <div ref={(el) => {
          this.messagesListEnd = el;
        }}/>
      </section>
    );
  }
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      message: PropTypes.string,
      author: PropTypes.string
    })
  )
};

export default MessagesList;
