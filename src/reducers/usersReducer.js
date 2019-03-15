import * as types from '../actions/actionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER: {
      const { payload } = action;
      return [
        ...state,
       payload
      ];
    }
    case types.USERS_LIST:
      return action.users;
    default:
      return state;
  }
};

export default users;
