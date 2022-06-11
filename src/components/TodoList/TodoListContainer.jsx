import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTodoInLocal,
  deleteTask,
  setData,
  handleInputChange,
} from '../../store/slice';
import TodoListAll from './TodoListAll';
import TodoListActive from './TodoListActive';
import TodoListComplited from './TodoListComplited';
import { Route, Routes } from 'react-router-dom';

function TodoListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoInLocal());
    let data = `${new Date().getDate()} ${
      new Date().getMonth() + 1
    } ${new Date().getFullYear()}`;
    dispatch(setData(data));
  }, []);

  const todos = useSelector((state) => state.todo.todos),
    data = useSelector((state) => state.todo.data);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <TodoListAll
            todos={todos}
            data={data}
            deleteTask={deleteTask}
            handleInputChange={handleInputChange}
          />
        }
      />

      <Route
        path="all"
        element={
          <TodoListAll
            todos={todos}
            data={data}
            deleteTask={deleteTask}
            handleInputChange={handleInputChange}
          />
        }
      />

      <Route
        path="active"
        element={
          <TodoListActive
            todos={todos}
            data={data}
            deleteTask={deleteTask}
            handleInputChange={handleInputChange}
          />
        }
      />

      <Route
        path="complited"
        element={
          <TodoListComplited
            todos={todos}
            data={data}
            deleteTask={deleteTask}
            handleInputChange={handleInputChange}
          />
        }
      />
    </Routes>
  );
}

export default TodoListContainer;
