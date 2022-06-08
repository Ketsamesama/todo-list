import React from "react";
import s from "./AddTask.module.scss";

function Input({input, dispatch, updateInput, addTodo}) {
  return (
    <>
    <form className={s.inputForm} onSubmit={(e) => {
      e.preventDefault()
      dispatch(addTodo())
    }
      }>
      <input placeholder="Добавить задачу"
       value={input} 
       onChange={(e) => dispatch(updateInput(e.target.value))
       }/>
      <button className={s.btnAddTask}>Добавить</button>
      </form>
    </>
  );
}

export default Input;
