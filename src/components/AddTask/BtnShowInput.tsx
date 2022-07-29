import React, { FC } from 'react';

import type { IPropsBtn } from 'utils/types';
import plus from 'assets/plus.svg';
import s from './AddTask.module.scss';

// придерживайся одного код стайла при объявлении компонет, если используешь function, то используй его везде,
// если используешь стрелочные функции, тогда такие компонеты пиши таким образом
// const BtnShowInput = () => (
// <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         showHideInput(true);
//       }}
//     >
//       <button className={s.btnIcon}>
//         <img src={plus} alt="добавить"></img>
//       </button>
//       <button className={s.btnText}>Добавить задачу</button>
//     </form>
// )
const BtnShowInput: FC<IPropsBtn> = ({ showHideInput }) => {
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
