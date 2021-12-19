import React from "react";
import { CustomInputNumber } from "./components/custom-input-number";

export const App = () => {
  return (
    <>
      <h1>Normal Example</h1>
      <CustomInputNumber value={2} />
      <h1>Disabled Example</h1>
      <CustomInputNumber disabled={true} value={2} />
    </>
  );
};
