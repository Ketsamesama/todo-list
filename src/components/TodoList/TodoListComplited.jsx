import React from 'react';
import s from './TodoList.module.scss';
import AddTask from '../AddTask/AddTask';
import Header from './Header/Header';
import TodoItem from './TodoItem/TodoItem';

function TodoListComplited({ todos, data, deleteTask, handleInputChange }) {
  return (
    <div className={s.todo}>
      <Header data={data} />
      <AddTask />

      {todos.length > 0
        ? todos.map((todo, i) => {
            if (todo.isTaskCompleted) {
            return (
              <TodoItem
                todo={todo}
                i={i}
                deleteTask={deleteTask}
                handleInputChange={handleInputChange}
              />
            );
            }
          })
        : ''}

      <div className={s.backline}></div>
    </div>
  );
}

export default TodoListComplited;
