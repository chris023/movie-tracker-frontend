import { compose } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import mySaga from './sagas'

const persistConfig = {
  key: 'root',
  storage,
}

const pReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const allStoreEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    compose
)

const store = createStore(pReducer, allStoreEnhancers)
const persistor = persistStore(store)

sagaMiddleware.run(mySaga)

export { store, persistor }
