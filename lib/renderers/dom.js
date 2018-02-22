import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';

import { Provider } from 'react-redux';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import configureStore from 'components/store/configureStore';
const store = configureStore();



render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);