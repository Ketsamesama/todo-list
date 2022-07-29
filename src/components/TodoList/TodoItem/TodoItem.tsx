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

  // здесь лучше использовать тернарный оператор
  // const className = todo.isTaskCompleted ? `${s.todoItem} ${s.completedTask}` : `${s.todoItem}`;
  let className = `${s.todoItem}`;
  if (todo.isTaskCompleted) {
    className += ` ${s.completedTask}`; //stylizing completed todos
  }

  return (
    // если используешь i, то лучше пиши i.toString(36)
    <li className={className} key={i}>
      <label>
        <input
          type="checkbox"
          className={s.chekbox}
          checked={todo.isTaskCompleted}
          onChange={() => dispatch(toggleComplitedActive(i))}
        />
        {/*<span className={s.fake} />*/}
        <span className={s.fake}></span>
        <p className={s.description}>{todo.description}</p>
      </label>
      {/* я бы вынес onClick в отдельную функцию, будет более читабельно*/}
      <button className={s.btnDel} onClick={() => dispatch(deleteTask(i))}>
        {/*<img src={Delete} alt="удалить" />*/}
        <img src={Delete} alt="удалить"></img>
      </button>
    </li>
  );
};

export default TodoItem;
