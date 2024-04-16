import React, { useState, useEffect } from 'react';

const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < endValue) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 10); // Increment every second (adjust as needed)

    return () => {
      clearInterval(intervalId);
    };
  }, [count, endValue]);

  return (
    <div>
      <h1> {count}</h1>
    </div>
  );
};

export default Counter;
