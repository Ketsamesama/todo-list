import React, { useState } from 'react';

import BtnShowInput from './BtnShowInput';
import Input from './Input';

import s from './AddTask.module.scss';

const AddTask = () => {
  const [isInputShown, showHideInput] = useState<boolean>(false);

  return (
      <>
        {!isInputShown ? (
            <div className={s.add}>
              <BtnShowInput showHideInput={showHideInput} />
            </div>
        ) : (
            <div className={`${s.add} ${s.addInput}`}>
              <Input showHideInput={showHideInput} />
            </div>
        )}
      </>
  );
};

export default AddTask;