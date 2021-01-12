export const addContacts = (id, name, number) => ({
  type: 'contacts/AddContacts',
  payload: { id, name, number },
});

export const deleteContacts = id => ({
  type: 'contacts/DeleteContacts',
  payload: { id },
});

export const updateFilter = text => ({
  type: 'filter/UpdateFilter',
  payload: { text },
});

export const deleteFilter = () => ({
  type: 'filter/deleteFilter',
});
