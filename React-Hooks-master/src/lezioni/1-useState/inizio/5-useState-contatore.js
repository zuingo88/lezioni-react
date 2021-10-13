import React, { useState } from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);

  const reset = () => {
    setContatore(0);
  };

  const aumenta = () => {
    setContatore((oldValue) => {
      if (oldValue + 1 === 6) {
        return oldValue
      }
      return oldValue + 1
    })
  };

  return (
    <div className='bg-white shadow rounded py-5 w-75 col-6 offset-3'>

      <h3>{contatore}</h3>

      <div className="d-flex justify-content-between">
        <button
          className="button my-2"
          onClick={() => setContatore(contatore - 1)}
        >
          -
        </button>
        <button
          className="button my-2"
          onClick={aumenta}
        >
          +
        </button>
      </div>

      <button
        className="button reset-button my-2"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterComponent;
