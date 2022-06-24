import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTodoInLocal,
  deleteTask,
  setData,
  toggleComplitedActive,
} from '../../store/slice';
import TodoList from './TodoList';
import { useLocation } from 'react-router-dom';

function TodoListContainer() {
  const dispatch = useDispatch();
  let url = useLocation().pathname;

  function getActualTodoList(url, todos) {
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
      toggleComplitedActive={toggleComplitedActive}
    />
  );
}

export default TodoListContainer;
