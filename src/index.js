import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider }  from 'react-redux';
import App from './App';

const store = configureStore();
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
