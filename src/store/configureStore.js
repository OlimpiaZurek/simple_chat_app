import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const persistedState = localStorage.getItem('reduxState') ?
 JSON.parse(localStorage.getItem('reduxState')) : {};

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    persistedState,
   // initialState,
    compose(
      applyMiddleware(thunk, reduxImmutableStateInvariant()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
