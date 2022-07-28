import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import s from './AddTask.module.scss';
import BtnShowInput from './BtnShowInput';
import Input from './Input';
import { addTodo, updateInput } from '../../store/slice';

function AddTask() {
  const [isInputShown, showHideInput] = useState(false),
    input = useSelector((state) => state.todo.input),
    dispatch = useDispatch();
  return (
    <>
      {!isInputShown ? (
        <div className={s.add}>
          <BtnShowInput dispatch={dispatch} showHideInput={showHideInput} />
        </div>
      ) : (
        <div className={`${s.add} ${s.addInput}`}>
          <Input
            input={input}
            dispatch={dispatch}
            updateInput={updateInput}
            addTodo={addTodo}
          />
        </div>
      )}
    </>
  );
}

export default AddTask;
