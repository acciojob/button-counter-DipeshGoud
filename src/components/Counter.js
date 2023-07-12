import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button clicked {count} times</p>
      <br></br>
      <button id="clickMe" onClick={increaseCount}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
