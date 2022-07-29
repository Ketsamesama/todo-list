import type { RootState } from 'store';

const todosSelector = (state: RootState) => state.todo.todos;
const dataSelector = (state: RootState) => state.todo.data;
const inputSelector = (state: RootState) => state.todo.input;

export { todosSelector, dataSelector, inputSelector };
