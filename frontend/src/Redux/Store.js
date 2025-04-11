import { configureStore } from '@reduxjs/toolkit';
import libraryDetailsReducer from './OverviewSlice';
import editReducer from './toggleEdit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';

// Persist config
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['edit'], // Do not persist edit states
};

// Combine reducers
const rootReducer = combineReducers({
  overviewDescription: libraryDetailsReducer,
  edit: editReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
      },
    }),
});

// Persistor
const persistor = persistStore(store);

export { store, persistor };
