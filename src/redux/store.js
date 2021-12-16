import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './contacts/reducers.js'

const defaultState = {
    contacts:[{
        name:"",
        number:"",
        id:''
    }],
    filter:'',
}

 const store = configureStore({
    reducer:defaultState, 
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    devTools: process.env.NODE_ENV === 'development'})
 export default store;