import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoStore from 'store';

import { getActualTodoList, getData } from 'utils/helpers';
import { appPath } from 'utils/path';
import TodoList from './TodoList';

const TodoListContainer = observer(() => {
  const data = TodoStore.data;

  const url = useLocation().pathname;
  let navigate = useNavigate();

  useEffect(() => {
    const pathIncludesUrl = appPath.find((item) => {
      return item.path === url
    });
    //если ни один из релевантных url не совпадает с текущим url, редеректим в '/all'
    if (!pathIncludesUrl) {
      navigate(appPath[0].path);
    }
    TodoStore.getTodoInLocal();
    const data = getData();
    TodoStore.setData(data);
  }, []);

  const todos = getActualTodoList(url, TodoStore.todos);

  return <TodoList todos={todos} data={data} />

});

export default TodoListContainer;
