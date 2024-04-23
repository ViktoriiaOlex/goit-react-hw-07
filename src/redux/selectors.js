import { createSelector } from '@reduxjs/toolkit';

export const selectFilterName = state => {
  return state.filters.name;
};

export const selectContactItems = state => state.contacts.items;

export const selectContactsIsLoading = state => state.contacts.loading;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContactItems, selectFilterName],
  (contacts, filters) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase().trim())
    )
);
