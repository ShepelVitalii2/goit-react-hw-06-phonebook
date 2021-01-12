import { createStore } from 'redux';

// const initialState = {
//   initialValue: { name: '', number: '' },
// };

const contactsReducer = (
  state = [],
  { type, payload },
) => {
  switch (type) {
    case 'contacts/AddContacts':
      return [payload, ...state];

    case 'contacts/DeleteContacts':
      return state.filter(
        contact => contact.id !== payload.id,
      );

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'filter/UpdateFilter':
      return payload.text;
    case 'filter/deleteFilter':
      return;
    default:
      return state;
  }
};

const storeContacts = createStore(contactsReducer);
const storeFilter = createStore(filterReducer);

export { storeContacts, storeFilter };
