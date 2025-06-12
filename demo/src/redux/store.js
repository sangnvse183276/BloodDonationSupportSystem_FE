
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './rootReducer'
import persistReducer from 'redux-persist/es/persistReducer'
import { configureStore } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer:persistedReducer,
});
export const persistor = persistStore(store);