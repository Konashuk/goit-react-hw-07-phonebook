import { configureStore } from '@reduxjs/toolkit';
import { phonebookReduser } from './contactsSlise';

export const store = configureStore({
  reducer: phonebookReduser,
});
