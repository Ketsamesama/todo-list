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

  const className = todo.isTaskCompleted
    ? `${s.todoItem} ${s.completedTask}`
    : `${s.todoItem}`;

  const handleDelete = () => dispatch(deleteTask(i));

  const onToggle = () => dispatch(toggleComplitedActive(i));
  return (
    <li className={className}>
      <label>
        <input
          type="checkbox"
          className={s.chekbox}
          checked={todo.isTaskCompleted}
          onChange={onToggle}
        />
        <span className={s.fake} />
        <p className={s.description}>{todo.description}</p>
      </label>
      <button className={s.btnDel} onClick={handleDelete}>
        <img src={Delete} alt="удалить" />
      </button>
    </li>
  );
};

export default TodoItem;
