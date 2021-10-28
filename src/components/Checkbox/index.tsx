import React, { useState } from 'react';
import styles from "./Checkbox.module.scss";
import Tick from './tick.svg'

interface ICheckbox {
  id: string;
  name: string;
  label?: string;
  handleOnChange: (evt: any) => void;
}

const Checkbox: React.FC<ICheckbox> = ({ id, name, label, handleOnChange }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.Checkbox}>

      <label htmlFor={id}>
        <input type="checkbox"
          name={name}
          id={id}
          checked={checked}
          onChange={(evt) => {
            setChecked(!checked)
            handleOnChange(evt)
          }} />
        <span className={styles.customCheckbox}>
          {checked && <img src={Tick} alt={`${name} search option`} />}
        </span>
      </label>
      {label}
    </div>
  )
}

export default Checkbox
