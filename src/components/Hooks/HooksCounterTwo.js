import React, { useState } from "react";

function HooksCounterTwo(props) {
  const initialCount = 0;
  const [count, setCount] = useState(0);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      count : {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Incerment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Incerment 5</button>
    </div>
  );
}

export default HooksCounterTwo;
