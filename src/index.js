import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'
import { configStore, history } from './store';

import App from './views/App';
import reportWebVitals from './reportWebVitals';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configStore()}>
    <App history={history} />
  </Provider>
);

reportWebVitals();
