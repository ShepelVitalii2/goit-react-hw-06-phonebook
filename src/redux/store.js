import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './contacts/contacts-reducers';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
      ],
    },
  }),
];

const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, reducers),
});

export const store = configureStore({
  reducer: rootReducer,

  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);

// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   contacts: reducers,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(),
// );

// export default store;
