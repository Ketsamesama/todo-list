import { combineReducers } from '@reduxjs/toolkit';
import todoSlice from './slice/slice';

const store = combineReducers({
  reducer: {
    todo: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
