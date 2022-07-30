import React, { FC } from 'react';

import { IPropsInput } from 'utils/types';
import s from './AddTask.module.scss';

const Input: FC<IPropsInput> = ({
  input,
  dispatch,
  updateInput,
  addTodo,
  showHideInput,
}) => {
  const leaveInput = () => {
    showHideInput(false);
    dispatch(updateInput(''));
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateInput(e.target.value));
  };

  const onKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      leaveInput();
    }
  };

  const OnBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!(e.relatedTarget?.localName === 'button')) {
      leaveInput();
    }
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo());
  };

  return (
    <>
      <form className={s.inputForm} onSubmit={onSubmitForm}>
        <input
          placeholder="Добавить задачу"
          value={input}
          onChange={onChangeInput}
          autoFocus={true}
          onBlur={OnBlurInput}
          onKeyDown={onKeyDownInput}
        />
        <button className={s.btnAddTask}>Добавить</button>
      </form>
    </>
  );
};

export default Input;
