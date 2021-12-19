import React from "react";
export const CustomInput = ({
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
      <div data-component="element" className={'value'} contentEditable>{value}</div>
      <button data-component="element" className={'plus symbol'}><div/></button>
    </div>
  );
};
