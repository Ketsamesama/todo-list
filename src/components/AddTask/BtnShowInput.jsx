import React from "react";
import plus from "../../assets/plus.svg";
import s from "./AddTask.module.scss";

function BtnShowInput({dispatch, showHideInput}) {

  return (
    <div>
      <button className={s.btnIcon} onClick={() => dispatch(showHideInput())} >
        <img src={plus} alt="добавить"></img>
      </button>
      <button className={s.btnText} onClick={() => dispatch(showHideInput())}>Добавить задачу</button>
    </div>
  );
}

export default BtnShowInput;
