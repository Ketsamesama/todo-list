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
  // здесь переменная нигде не переназначается лучше объявить ее const
  let url = useLocation().pathname;

  useEffect(() => {
    dispatch(getTodoInLocal());
    const data = getData();
    dispatch(setData(data));
  }, []);

  // лучше вынести в отдельные файл селекторы
  // и лучше не менять данные через let, на самом деле легче создать просто две константы
  // и вынеси объявление этих данных в самое начало функции
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
