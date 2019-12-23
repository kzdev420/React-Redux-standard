import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configure/store';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Root from './app/Root';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

