import React from "react";
import PropTypes from "prop-types";
import style from './style.scss';

const Message = ({ message, author, isMy }) => (
  <p className={isMy ? style.myContainer : style.container}>
    <span className={style.author}>{author}</span> 
    <span className={`${style.message} ${isMy ? style.myMessage : style.notMy}`}>{message}</span>
  </p>
);

Message.propTypes = {
  message: PropTypes.string,
  author: PropTypes.string,
  isMy: PropTypes.bool,
};

export default Message;
