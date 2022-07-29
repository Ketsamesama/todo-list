import React, { FC } from 'react';

import { useAppDispatch } from 'hooks';
import type { IPropsTodoItem } from 'utils/types';

import Delete from 'assets/delete.svg';
import s from './TodoItem.module.scss';

const TodoItem: FC<IPropsTodoItem> = ({
  i,
  todo,
  deleteTask,
  toggleComplitedActive,
}) => {
  const dispatch = useAppDispatch();

  let className = `${s.todoItem}`;
  if (todo.isTaskCompleted) {
    className += ` ${s.completedTask}`; //stylizing completed todos
  }

  return (
    <li className={className} key={i}>
      <label>
        <input
          type="checkbox"
          className={s.chekbox}
          checked={todo.isTaskCompleted}
          onChange={() => dispatch(toggleComplitedActive(i))}
        />
        <span className={s.fake}></span>
        <p className={s.description}>{todo.description}</p>
      </label>
      <button className={s.btnDel} onClick={() => dispatch(deleteTask(i))}>
        <img src={Delete} alt="удалить"></img>
      </button>
    </li>
  );
};

export default TodoItem;
