import React from "react";
export const CustomInputNumber = ({
  min,
  max,
  step,
  name,
  value,
  onChange,
  onBlur,
  disabled,
}) => {
  return (
    <div data-component="number-input">
      <button data-component="element" className={`minus symbol ${disabled ? 'disabled': ''}`}/>
      <input disabled={disabled} data-component="element" className={'value'} value={value}/>
      <button data-component="element" className={`plus symbol ${disabled ? 'disabled': ''}`}><div/></button>
    </div>
  );
};
