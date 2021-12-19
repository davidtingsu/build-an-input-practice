import React from "react";
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  CHANGE: "change",
};

const isNumber = (number) => !isNaN(number) && typeof number === "number";

export const CustomInputNumber = ({
  min = -Infinity,
  max = Infinity,
  step = 1,
  name,
  value: initialValue,
  onChange = (e) => console.log(e),
  onBlur = (e) => console.log(e),
  disabled = false,
}) => {
  const textInput = React.useRef(null);

  // setNativeValue calls native value setter
  // https://stackoverflow.com/a/59939017/1123985
  const setNativeValue = (element, value) => {
    const valueSetter = Object.getOwnPropertyDescriptor(element, "value").set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(
      prototype,
      "value"
    ).set;

    if (valueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value);
    } else {
      valueSetter.call(element, value);
    }
  };

  function reducer(state, action) {
    const value = parseFloat(state.value);
    const valueIsNumber = isNumber(value);

    const payloadValue = parseFloat(action?.payload?.value);
    const payloadValueIsNumber = isNumber(payloadValue);

    switch (action.type) {
      case ACTIONS.INCREMENT:
        if (valueIsNumber && value + step <= max) {
          return { value: value + step };
        }
        return state;
      case ACTIONS.DECREMENT:
        if (valueIsNumber && value - step >= min) {
          return { value: value - step };
        }
        return state;
      case ACTIONS.CHANGE:
        if (
          payloadValueIsNumber &&
          payloadValue >= min &&
          payloadValue <= max
        ) {
          return { value: action.payload.value };
        }
        if (!payloadValueIsNumber) {
          return { value: action.payload.value };
        }
        return state;

      default:
        return state;
    }
  }
  const [state, setState] = React.useState({ value: initialValue });

  /**
   * dispatchNativeChangeEvent dispatches an "input" event
   * on the input element, which then triggers a "change" event
   */
  const dispatchNativeChangeEvent = React.useCallback(() => {
    const event = new Event("input", { bubbles: true });
    textInput.current.dispatchEvent(event);
  }, [textInput]);

  const handleClickAdd = React.useCallback(
    (e) => {
      const newState = reducer(state, { type: ACTIONS.INCREMENT });
      setNativeValue(textInput.current, newState.value);
      dispatchNativeChangeEvent();
    },
    [state, textInput]
  );
  const handleClickMinus = React.useCallback(
    (e) => {
      const newState = reducer(state, { type: ACTIONS.DECREMENT });
      setNativeValue(textInput.current, newState.value);
      dispatchNativeChangeEvent();
    },
    [state, textInput]
  );
  /**
   * handleOnChange updates
   * the input state when the values changes
   * from clicking the "+" or "-" button or from
   * typing in the input element
   */
  const handleOnChange = React.useCallback(
    (e) => {
      const newState = reducer(state, {
        type: ACTIONS.CHANGE,
        payload: { value: e.target.value },
      });
      if (state.value !== newState.value) {
        setState({ value: newState.value });
        onChange(e);
      }
    },
    [onChange, state]
  );
  return (
    <div data-component="number-input">
      <button
        disabled={disabled}
        onClick={handleClickMinus}
        data-component="element"
        className={`minus symbol`}
      />
      <input
        name={name}
        placeholder={"0"}
        ref={textInput}
        onChange={handleOnChange}
        onBlur={onBlur}
        disabled={disabled}
        data-component="element"
        className={"value"}
        value={state.value}
      />
      <button
        disabled={disabled}
        onClick={handleClickAdd}
        data-component="element"
        className={`plus symbol`}
      />
    </div>
  );
};
