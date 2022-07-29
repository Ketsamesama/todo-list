import React from 'react';

import plus from 'assets/plus.svg';
import s from './AddTask.module.scss';

interface IProps {
  showHideInput: (state: boolean) => void;
}

const BtnShowInput: React.FC<IProps> = ({ showHideInput }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        showHideInput(true);
      }}
    >
      <button className={s.btnIcon}>
        <img src={plus} alt="добавить"></img>
      </button>
      <button className={s.btnText}>Добавить задачу</button>
    </form>
  );
};

export default BtnShowInput;
