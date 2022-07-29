import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';
import { todosSelector, dataSelector } from 'selectors';
import { getActualTodoList, getData } from 'utils/helpers';
import {
  getTodoInLocal,
  deleteTask,
  setData,
  toggleComplitedActive,
} from 'store/slice/slice';
import TodoList from './TodoList';

function TodoListContainer() {
  let todos = useAppSelector(todosSelector);
  const data = useAppSelector(dataSelector);

  const dispatch = useAppDispatch();
  const url = useLocation().pathname;

  useEffect(() => {
    dispatch(getTodoInLocal());
    const data = getData();
    dispatch(setData(data));
  }, []);

  todos = getActualTodoList(url, todos); //филттруем список задач в зависимости от url
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
