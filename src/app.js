import React from "react";
import { CustomInputNumber } from "./components/custom-input-number";

export const App = () => {
  return (
    <>
      <h1>Normal Example</h1>
      <CustomInputNumber value={2} />
      <h1>Disabled Example</h1>
      <CustomInputNumber disabled={true} value={2} />
      <h1>Step:5</h1>
      <CustomInputNumber value={2} step={5} />
      <h1>Min: -10, Max: 10, Step: 5, Value: 0</h1>
      <CustomInputNumber min={-10} value={0} step={5} max={10}/>
      <h1>Min: -10, Max: 10, Step: 5, Value: 2</h1>
      <CustomInputNumber min={-10} value={2} step={5} max={10}/>
    </>
  );
};
