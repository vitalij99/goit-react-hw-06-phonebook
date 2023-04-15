import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    createContact: (state, action) => {
      return [...(state.contacts + action.payload)];
    },
    deleteTask(state, action) {},
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { createContact } = contactsSlice.actions;
