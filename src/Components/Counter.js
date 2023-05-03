import React, { useState, useMemo } from "react";

const Counter = () => {
  const [counterone, setCountone] = useState(0);
  const [countertwo, setCounttwo] = useState(0);

  const incrementone = () => {
    setCountone(counterone + 1);
  };
  const incrementtwo = () => {
    setCounttwo(countertwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterone % 2 == 0;
  }, [counterone]);

  return (
    <div>
      <div>
        <button onClick={incrementone}>Count one - {counterone}</button> <br />
        <span>{isEven() ? 'Even' : 'odd'}</span>
      </div>
      <div>
        <button onClick={incrementtwo}>Count two - {countertwo}</button>
      </div>
    </div>
  );
};

export default Counter;
