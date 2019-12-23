import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { saga as routerSaga } from 'redux-saga-first-router';

import reducer from 'reducers';
import mainSaga from 'sagas';
import routes from 'app/routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const configureStore = () => {
  const middleware = [sagaMiddleware];

  const store = createStore(
    reducer,
    {},
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );

  sagaMiddleware.run(mainSaga);
  sagaMiddleware.run(routerSaga, routes, history);

  console.log(history)

  return store;
}


export default configureStore;
