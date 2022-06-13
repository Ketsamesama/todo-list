import React from 'react';
import Delete from '../../../assets/delete.svg';
import s from './TodoItem.module.scss';
import { useDispatch } from 'react-redux';

function TodoItem({ i, todo, deleteTask, handleInputChange }) {

  const dispatch = useDispatch();

  let className = `${s.todoItem}`;
  if (todo.isTaskCompleted) {
    className += ` ${s.completedTask}`; //stylizing completed todos
  }

  return (
    <div className={className} key={i}>
      <label>
        <input type="checkbox"
         className={s.chekbox}
         checked={todo.isTaskCompleted}
         onChange={() => dispatch(handleInputChange(i))} />
        <span className={s.fake}></span>
        <p className={s.description}>{todo.description}</p>
      </label>
      <button className={s.btnDel} onClick={() => dispatch(deleteTask(i))}>
        <img src={Delete} alt="удалить"></img>
      </button>
    </div>
  );
}

export default TodoItem;
