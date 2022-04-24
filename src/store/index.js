import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function configStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: [sagaMiddleware, routerMiddleware(history)]
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export { configStore, history };
