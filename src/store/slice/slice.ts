import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { setZiro } from './helpers';
import type { IState } from './types';

const initialState: IState = {
  todos: [],
  input: '',
  data: '',
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodoInLocal(state: IState) {
      const todoLocal = localStorage.getItem('todo');
      if (todoLocal) {
        state.todos = JSON.parse(todoLocal);
      }
    },
    addTodo(state: IState) {
      if (state.input.trim()) {
        const newTask = {
          description: state.input,
          isTaskCompleted: false,
        };
        state.todos.unshift(newTask);
        state.input = '';
        localStorage.setItem('todo', JSON.stringify(state.todos));
      }
    },
    updateInput(state: IState, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    deleteTask(state: IState, action: PayloadAction<number>) {
      state.todos.splice(action.payload, 1);
      localStorage.setItem('todo', JSON.stringify(state.todos));
    },
    setData(state: IState, action: PayloadAction<string>) {
      let data = action.payload.split(' ');
      data = data.map((item) => setZiro(+item));
      state.data = data.join('.');
    },
    toggleComplitedActive(state: IState, action: PayloadAction<number>) {
      const i = action.payload;
      state.todos[i].isTaskCompleted = !state.todos[i].isTaskCompleted;
      state.input = '';
      localStorage.setItem('todo', JSON.stringify(state.todos));
    },
  },
});

export const {
  addTodo,
  updateInput,
  getTodoInLocal,
  deleteTask,
  setData,
  toggleComplitedActive,
} = todoSlice.actions;

export default todoSlice.reducer;
