import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';

// Custom persistence middleware
const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  
  // Save state to localStorage after each action
  const state = store.getState();
  try {
    localStorage.setItem('redux-state', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
  
  return result;
};

// Load persisted state from localStorage
const loadPersistedState = () => {
  try {
    const serializedState = localStorage.getItem('redux-state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return undefined;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadPersistedState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
