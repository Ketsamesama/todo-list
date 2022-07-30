import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';
import { todosSelector, dataSelector } from 'selectors';
import { getActualTodoList, getData } from 'utils/helpers';
import {
  getTodoInLocal,
  deleteTask,
  setData,
  toggleComplitedActive,
} from 'store/slice/slice';
import { appPath } from 'utils/path';
import TodoList from './TodoList';

function TodoListContainer() {
  let todos = useAppSelector(todosSelector);
  const data = useAppSelector(dataSelector);
  const dispatch = useAppDispatch();

  const url = useLocation().pathname;
  let navigate = useNavigate();

  useEffect(() => {
    //если ни один из релевантных url не совпадает, редеректим в '/all'
    if (!appPath.includes(url)) {
      navigate(appPath[0]);
    }
    dispatch(getTodoInLocal());
    const data = getData();
    dispatch(setData(data));
  }, []);

  useEffect(() => {}, [url]);

  todos = getActualTodoList(url, todos);
  return (
    <>
      <TodoList
        todos={todos}
        data={data}
        deleteTask={deleteTask}
        toggleComplitedActive={toggleComplitedActive}
      />
    </>
  );
}

export default TodoListContainer;
