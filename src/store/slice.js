import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  input: '',
  data: '',
};

function setZiro(n) {
  if (n < 10) {
    return `0${n}`;
  }
  return n;
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodoInLocal(state) {
      const todoLocal = localStorage.getItem('todo');
      if (todoLocal) {
        state.todos = JSON.parse(todoLocal);
      }
    },
    addTodo(state) {
      if (state.input.trim()) {
        const newTask = {
          description: state.input,
          isTaskCompleted: false,
        };
        state.todos.push(newTask);
        state.input = '';
        localStorage.setItem('todo', JSON.stringify(state.todos));
      }
    },
    updateInput(state, action) {
      state.input = action.payload;
    },
    deleteTask(state, action) {
      state.todos.splice(action.payload, 1);
      localStorage.setItem('todo', JSON.stringify(state.todos));
    },
    setData(state, action) {
      let data = action.payload.split(' ');
      data = data.map((item) => setZiro(item));
      state.data = data.join('.');
    },
    toggleComplitedActive(state, action) {
      const i = action.payload;
      state.todos[i].isTaskCompleted = !state.todos[i].isTaskCompleted;
      state.input = '';
      localStorage.setItem('todo', JSON.stringify(state.todos));
    }
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
