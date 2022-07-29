import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';

import s from './AddTask.module.scss';
import BtnShowInput from './BtnShowInput';
import Input from './Input';
import { addTodo, updateInput } from 'store/slice/slice';

function AddTask() {
  const [isInputShown, showHideInput] = useState<boolean>(false);
  const input = useAppSelector((state) => state.todo.input);
  const dispatch = useAppDispatch();

  return (
    <>
      {!isInputShown ? (
        <div className={s.add}>
          <BtnShowInput showHideInput={showHideInput} />
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
