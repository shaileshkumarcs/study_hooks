import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerHookCounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button type="button" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch("reset")}>
        Reset
      </button>
      <div>
        <div>Count Two - {countTwo}</div>
        <button type="button" onClick={() => dispatchTwo("increment")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatchTwo("decrement")}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatchTwo("reset")}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ReducerHookCounterThree;
