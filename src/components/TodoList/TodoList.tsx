import React, { FC } from 'react';

import AddTask from '../AddTask/AddTask';
import Header from './Header/Header';
import TodoItem from './TodoItem/TodoItem';
import type { IPropsTodoList } from 'utils/types';

// импортируй типы до компонент

import s from './TodoList.module.scss';

// смтори BtnShowInput
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


      {/* сразу закрывай такой тэг <div className={s.backline} />*/}
      <div className={s.backline}></div>
    </div>
  );
};

export default TodoList;
