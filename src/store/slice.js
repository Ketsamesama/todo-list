import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isInputShown: false,
    todos: [],
    input: '',
    data: '',
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        getTodoInLocal(state) {
            const todoLocal = localStorage.getItem('todo');
            state.todos =  JSON.parse(todoLocal);
        },
        showHideInput(state) {
            state.isInputShown = !state.isInputShown;
        },
        addTodo(state) {
            if (state.input.trim()) {
                state.todos.push(state.input);
                state.input = '';
                localStorage.setItem('todo', JSON.stringify(state.todos));
            }

        },
        updateInput(state, action) {
            state.input = action.payload 
        },
        deleteTask(state, action) {
            state.todos.splice(action.payload, 1);
            localStorage.setItem('todo', JSON.stringify(state.todos));
        }
  
    }
})

export const { showHideInput, addTodo, updateInput, getTodoInLocal, deleteTask, setData } = todoSlice.actions;
export default todoSlice.reducer
