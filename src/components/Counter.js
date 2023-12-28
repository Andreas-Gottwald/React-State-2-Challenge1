import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [increment, setIncrement] = useState(0);

  function handlePlusClick() {
    setIncrement(increment + 1);
  }

  function handleMinusClick() {
    setIncrement(increment - 1);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={increment} />
      <div className="counter__buttons-container">
        <button
          onClick={handlePlusClick}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={handleMinusClick}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
