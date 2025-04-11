import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function decrementCount() {
    setCount((c) => c - step);
  }
  function incrementCount() {
    setCount((c) => c + step);
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }

  let date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <h1>Date Counter</h1>
      <div>
        <div>
          <input
            type="range"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            min="0"
            max="10"
            id=""
          />
          Step : {step}{" "}
        </div>
        <div>
          <button onClick={decrementCount}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={incrementCount}>+</button>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>

        {count === 0 && step === 1 ? null : (
          <div>
            <button onClick={handleReset}>RESET</button>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
