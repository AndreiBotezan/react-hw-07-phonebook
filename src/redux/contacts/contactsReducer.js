import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { actions } from './contactsActions'

const items = createReducer([], {
    [actions.addContact]: (state, action) => [...state, action.payload],
    [actions.deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload)
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, action) => action.payload,
})

export default combineReducers({
    items,
    filter
})

// const items = (state = [], { type, payload }) => {
//     switch (type) {
//         case 'contacts/Add':
//             return [...state, payload];
        
//         case 'contacts/Delete':
//             return state.filter(contact => contact.id !== payload)

//         default:
//             return state;
//     }
// }

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case 'contacts/Filter':
//             return payload;

//         default:
//             return state;
//     }
// }