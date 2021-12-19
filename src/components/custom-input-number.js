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
      <button data-component="element" className={'minus symbol'}/>
      <input data-component="element" className={'value'} value={value}/>
      <button data-component="element" className={'plus symbol'}><div/></button>
    </div>
  );
};
