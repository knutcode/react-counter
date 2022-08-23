import SmallButton from "../styled-components/SmallButton";
import Count from "../styled-components/Count";
import { useState, useEffect } from "react";

const Counter = () => {
  // sets the state for count, bool, and pause timer
  let [count, setCount] = useState(0);
  let [bool, setBool] = useState(true);
  let [pauseTimer, setPauseTimer] = useState(true);

  // increases count state by 1 and sets bool state to true
  function increment() {
    setCount(count + 1);
    setBool(() => (bool = true));
  }

  // decreases count state by 1 and sets bool state to false
  function decrement() {
    setCount(count - 1);
    setBool(() => (bool = false));
  }

  // toggles the pause timer (true => false || false => true)
  function toggleTimer() {
    setPauseTimer(() => !pauseTimer);
  }

  // | applies effect setTimeout() when selected states are updated ( [count, bool, pauseTimer] )
  // | if bool is set to true, add +1 to count every 1000ms
  // | if bool is set to false, subtract -1 to count every 1000ms instead
  // |
  // | clearTimeout prevents the timer from calling multiple timeouts f.ex if increment button is spammed (makes sure useEffect is ONLY called once every 1000ms)
  // |
  // V if pauserTimer is set to true, do nothing.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pauseTimer) {
        return;
      }
      if (bool) {
        setCount((c) => c + 1);
      } else if (!bool) {
        setCount((c) => c - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [count, bool, pauseTimer]);

  // resets the count to 0 and pauses the timer.
  function reset() {
    setCount((count = 0));
    setPauseTimer((pauseTimer = true));
  }

  return (
    <>
      <Count>
        {count}
        {/* if the timer is't paused, adds "seconds" to the count, suggesting its counting in seconds. */}
        {!pauseTimer ? "s" : ""}
      </Count>

      {/* visualizing that the counter is decrementing */}
      <SmallButton className={!pauseTimer && !bool ? "decrease" : ""} onClick={decrement}>
        decrement
      </SmallButton>

      {/* visualizing that the counter is incrementing */}
      <SmallButton className={!pauseTimer && bool ? "increase" : ""} onClick={increment}>
        increment
      </SmallButton>

      {/* toggles the timer on or off, and adds some styling */}
      <SmallButton onClick={toggleTimer} className={pauseTimer ? "" : "stop"}>
        {pauseTimer ? "start timer" : "stop timer"}
      </SmallButton>

      <br />
      {/* resets the counter */}
      <p onClick={reset}>reset counter</p>
    </>
  );
};

export default Counter;
