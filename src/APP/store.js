import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userreducer from './user/userslice.js'
import {  persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistconfig ={
    key:"root",
    storage,
}
const reducers = combineReducers({
    user:userreducer
})
const persistedreducers =persistReducer(persistconfig,reducers)

 export const store = configureStore({
    reducer:persistedreducers,
})


export const persistor = persistStore(store)
