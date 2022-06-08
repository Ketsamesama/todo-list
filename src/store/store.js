import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoSlice from './slice';

const rootReducer = combineReducers({
  todo: todoSlice
})

const store = configureStore({
  reducer: rootReducer,
});

export default store;
