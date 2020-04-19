import React, { useState, useMemo } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne} type="button">
          Count One - {counterOne}
        </button>
        <spa>{isEven ? " Even" : " Odd"}</spa>
      </div>
      <div>
        <button onClick={incrementTwo} type="button">
          Count Two - {counterTwo}
        </button>
      </div>
    </div>
  );
}

export default Counter;
