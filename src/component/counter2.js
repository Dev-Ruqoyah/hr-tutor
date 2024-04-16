import React, { useState, useEffect } from 'react';

const Counter2 = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < endValue) {
        setCount(prevCount => prevCount + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1); // Increment every second (adjust as needed)

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

export default Counter2;
