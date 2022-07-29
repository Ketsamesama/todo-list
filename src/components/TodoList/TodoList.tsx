import React, { FC } from 'react';

import s from './TodoList.module.scss';
import AddTask from '../AddTask/AddTask';
import Header from './Header/Header';
import TodoItem from './TodoItem/TodoItem';

import type { IPropsTodoList } from 'components/types';

const TodoList: FC<IPropsTodoList> = ({
  todos,
  data,
  deleteTask,
  toggleComplitedActive,
}) => {
  return (
    <div className={s.todo}>
      <Header data={data} />
      <AddTask />
      <ul>
        {todos.length > 0 &&
          todos.map((todo, i) => {
            return (
              <TodoItem
                todo={todo}
                i={i}
                deleteTask={deleteTask}
                toggleComplitedActive={toggleComplitedActive}
                key={`tidoId${i}`}
              />
            );
          })}
      </ul>

      <div className={s.backline}></div>
    </div>
  );
};

export default TodoList;
