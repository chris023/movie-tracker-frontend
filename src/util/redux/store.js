import { compose } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const allStoreEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    compose
)

const store = createStore(rootReducer, allStoreEnhancers)

sagaMiddleware.run(mySaga)

export { store }
