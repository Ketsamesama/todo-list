import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import TodoStore from 'store';

import { IPropsInput } from './types';
import s from './AddTask.module.scss';

const Input: FC<IPropsInput> = observer(({ showHideInput }) => {
  const leaveInput = () => {
    showHideInput(false);
    TodoStore.updateInput('');
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    TodoStore.updateInput(e.target.value);
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
    TodoStore.addTodo();
  };

  return (
      <>
        <form className={s.inputForm} onSubmit={onSubmitForm}>
          <input
              placeholder="Добавить задачу"
              value={TodoStore.input}
              onChange={onChangeInput}
              autoFocus={true}
              onBlur={OnBlurInput}
              onKeyDown={onKeyDownInput}
          />
          <button className={s.btnAddTask}>Добавить</button>
        </form>
      </>
  );
});

export default Input;
