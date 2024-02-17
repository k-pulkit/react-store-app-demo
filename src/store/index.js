import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer';

// Let the store know about all reducers
export const Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  });