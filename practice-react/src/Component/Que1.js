import React, { useState } from 'react';

export default function Que1() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-center text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};




// 1 Create a counter application that allows users to increment and decrement the counter value using buttons. Additionally, implement a reset button to set the counter back to zero.


