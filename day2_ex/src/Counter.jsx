import { useState, useEffect } from "react";
import propTypes from "prop-types";

function Counter(props) {
  useEffect(() => {
    if (localStorage.getItem("counter") != null) {
      setCounter(Number(localStorage.getItem("counter")));
    }
  }, []);
  const { count, crement } = props;
  const [counter, setCounter] = useState(count);

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  function incrementCounter() {
    setCounter(counter + crement);
  }

  function decrementCounter() {
    setCounter(counter - crement);
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

Counter.propTypes = {
  count: propTypes.number,
  crement: propTypes.number,
};

Counter.defaultProps = {
  count: 0,
  crement: 1,
};

export default Counter;
