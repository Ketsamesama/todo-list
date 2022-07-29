import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { useLocation } from 'react-router-dom';

import { getActualTodoList, getData } from 'utils/helpers';
import {
  getTodoInLocal,
  deleteTask,
  setData,
  toggleComplitedActive,
} from 'store/slice/slice';
import TodoList from './TodoList';

function TodoListContainer() {
  const dispatch = useAppDispatch();

  let url = useLocation().pathname;

  useEffect(() => {
    dispatch(getTodoInLocal());
    const data = getData();
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
