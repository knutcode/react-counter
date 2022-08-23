import SmallButton from "../styled-components/SmallButton";
import Count from "../styled-components/Count";
import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let [countUp, setCountUp] = useState(true);

  //while
  function plus() {
    setCountUp(() => {
      countUp = true;
    });
    console.log(`count up is ${countUp}`);
  }

  function minus() {
    setCountUp(() => {
      countUp = false;
    });
    console.log(`count up is ${countUp}`);
  }

  useEffect(() => {
    if (countUp === true)
      setTimeout(() => {
        setCount(function (prevCount) {
          return prevCount + 1;
        });
      }, 1000);
    else if (countUp === false)
      setTimeout(() => {
        setCount(function (prevCount) {
          return prevCount - 1;
        });
      }, 1000);
  });

  return (
    <>
      <Count>{count}</Count>
      <SmallButton className="decrease" onClick={minus}>
        Decrease
      </SmallButton>
      <SmallButton className="increase" onClick={plus}>
        Increase
      </SmallButton>
    </>
  );
};

export default Counter;
