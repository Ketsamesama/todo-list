import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { addTodo, updateInput } from 'store/slice/slice';

import { inputSelector } from 'selectors';
import BtnShowInput from './BtnShowInput';
import Input from './Input';

import s from './AddTask.module.scss';

function AddTask() {
  const [isInputShown, showHideInput] = useState<boolean>(false);

  const input = useAppSelector(inputSelector);
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
