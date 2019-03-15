import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const FormField= ({ 
  message, 
  onChange, 
  value, 
  onClick, 
  placeholder, 
  onSubmit,
  formStyle,
  buttonStyle,
  inputStyle,
}) => (
  <section className={message ? style.newMessage : style.newUser}>
    <form onSubmit={onSubmit} className={formStyle}>
      <input
        onChange={onChange}
        type="text"
        value={value}
        className={inputStyle}
      />
      <button 
        onClick={onClick}
        className={buttonStyle}
        >
          {placeholder}
        </button>
    </form>
  </section>
);

FormField.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.bool,
  onSubmit: PropTypes.func,
  formStyle: PropTypes.string,
  buttonStyle: PropTypes.string,
  inputStyle: PropTypes.string
};

export default FormField;
