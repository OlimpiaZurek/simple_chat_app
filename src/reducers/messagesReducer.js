import * as types from '../actions/actionTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.MESSAGE_RECEIVED: {
      const { payload } = action;
      return [
        ...state,
        payload
      ];
    }
    default:
      return state;
  }
};

export default messages;
