import {combineReducers} from 'redux'
import {createReducer} from '@reduxjs/toolkit'
import { add_contact, delete_contact, search_contact} from './actions'
const contacts = createReducer([],{
    [add_contact]: (state, {payload})=>{return [...state, payload]},
    [delete_contact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [search_contact]: (_, { payload }) => payload,
});

export default combineReducers({
    contacts,
    filter,
})