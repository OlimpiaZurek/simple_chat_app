import { combineReducers } from 'redux';
import messages from './messagesReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
  messages,
  users,
});

export default rootReducer;

