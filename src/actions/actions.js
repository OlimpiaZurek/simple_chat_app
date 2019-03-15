import * as types from './actionTypes';
import {  addUserToSocketService, addMessageToSocketService } from '../services/sockets';

const uniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const addMessage = (message, author, isMy, id) => ({
  type: types.ADD_MESSAGE,
  payload: {
    id,
    message,
    author,
    isMy,
  }
});

export const addUser = (name, id) => ({
  type: types.ADD_USER,
  payload: {
    id,
    name
  }
});

export const messageReceived = (message, author, isMy, id) => ({
  type: types.MESSAGE_RECEIVED,
  payload: {
    id,
    message,
    isMy,
    author
  }
});

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
});

export const addNewMessage = (message, author, isMy) => {
  const id = uniqueId();
  const data = {
    message,
    author,
    id,
  };

  return dispatch => {
     addMessageToSocketService(data);
     dispatch(addMessage(message, author, isMy, id));
  };
};

export const addNewUser = (user) => {
  const userId = uniqueId();
  const data = {
    user,
    userId,
  };

  return dispatch => {
    addUserToSocketService(data);
    dispatch(addUser(user, userId));
  };
};

