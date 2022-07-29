import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useLocation } from 'react-router-dom';
import type { ITask } from 'components/types';

import {
  getTodoInLocal,
  deleteTask,
  setData,
  toggleComplitedActive,
} from 'store/slice/slice';
import TodoList from './TodoList';

function getActualTodoList(url: string, todos: ITask[] | []) {
  switch (url) {
    case '/active':
      if (todos.length > 0) {
        todos = todos.filter((todo) => {
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
  const dispatch = useAppDispatch();

  let url = useLocation().pathname;

  useEffect(() => {
    dispatch(getTodoInLocal());

    const data = `${new Date().getDate()} ${
      new Date().getMonth() + 1
    } ${new Date().getFullYear()}`;
    dispatch(setData(data));
  }, []);

  let todos = useAppSelector((state) => state.todo.todos);
  const data = useAppSelector((state) => state.todo.data);

  todos = getActualTodoList(url, todos);
  return (
    <TodoList
      todos={todos}
      data={data}
      deleteTask={deleteTask}
      toggleComplitedActive={toggleComplitedActive}
    />
  );
}

export default TodoListContainer;
