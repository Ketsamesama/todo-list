import React from "react";
import s from "./AddTask.module.scss";
import { useDispatch, useSelector } from "react-redux";
import BtnShowInput from "./BtnShowInput";
import Input from "./Input"
import { showHideInput, addTodo, updateInput } from "../../store/slice"

function AddTask() {
  const isInputShown = useSelector(state => state.todo.isInputShown),
        input = useSelector(state => state.todo.input),
        dispatch = useDispatch();
        
  return (
    <>
    {
      !isInputShown? 
      <div className={s.add}>
        <BtnShowInput dispatch={dispatch} showHideInput={showHideInput}/>
      </div> :
      <div className={`${s.add} ${s.addInput}`}>
        <Input input={input} dispatch={dispatch} updateInput={updateInput} addTodo={addTodo}/>
      </div>
    }

    </>
  );
}

export default AddTask;
