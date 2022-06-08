import React, { useEffect } from "react";
import s from "./TodoList.module.scss";
import AddTask from "../AddTask/AddTask";
import { useDispatch, useSelector } from "react-redux";
import Delete from "../../assets/delete.svg";
import { getTodoInLocal, deleteTask} from "../../store/slice";

function TodoListContainer() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoInLocal());

  }, []);

  return <TodoList dispatch={dispatch}/>
}

export default TodoListContainer


function TodoList({dispatch}) {
 
  function setZiro(n) {
    if (n < 10) {
      return `0${n}`
    }
  }

  const task = useSelector(state => state.todo.todos),
        data =  `${setZiro(new Date().getDay())}.${setZiro(new Date().getMonth())}.${new Date().getFullYear()}`;

  return (
    <div className={s.todo}>
      <h1>Мой день</h1>
      <p>{data}</p>
      <AddTask />

      {task.map((todo, i) => {
        return <div className={s.todoItem} key={i}>
        {todo}
        <button className={s.btnDel} onClick={() => dispatch(deleteTask(i))}>
        <img src={Delete} alt="удалить"></img>
      </button>
        </div>;
      })}

      <div className={s.backline}></div>
    </div>
  );
}

