import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTodoInLocal,
  deleteTask,
  setData,
  handleInputChange,
} from '../../store/slice';
import TodoList from './TodoList';
import { useLocation } from 'react-router-dom';

function getActualTodoList(url, todos) {
  switch (url) {
    case '/active':
      if (todos.length > 0) {
        todos = todos.filter((todo) => {
          debugger;
          return !todo.isTaskCompleted;
        });
      }
      break;
    case '/complited':
      if (todos.length > 0) {
        todos = todos.filter((todo) => todo.isTaskCompleted);
      }
      break;
    default:
      break;
  }
  return todos;
}

function TodoListContainer() {
  const dispatch = useDispatch();
  let url = useLocation().pathname;

  useEffect(() => {
    dispatch(getTodoInLocal());
    let data = `${new Date().getDate()} ${
      new Date().getMonth() + 1
    } ${new Date().getFullYear()}`;
    dispatch(setData(data));
  }, []);

  let todos = useSelector((state) => state.todo.todos),
    data = useSelector((state) => state.todo.data);

  todos = getActualTodoList(url, todos);
  return (
    <TodoList
      todos={todos}
      data={data}
      deleteTask={deleteTask}
      handleInputChange={handleInputChange}
    />
  );
}

export default TodoListContainer;
