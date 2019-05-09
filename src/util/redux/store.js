import { compose } from 'redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const pReducer = persistReducer(persistConfig, rootReducer)

const allStoreEnhancers = compose(
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    compose
)

const store = createStore(pReducer, allStoreEnhancers)
const persistor = persistStore(store)

export { store, persistor }
