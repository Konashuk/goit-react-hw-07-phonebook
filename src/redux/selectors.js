import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filters;

export const selectFilterContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (items, filters) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
