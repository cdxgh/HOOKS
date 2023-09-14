import React, { useState, useEffect } from "react";
const MyComponents = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(" Count got Updated...", count);
  }, [count]);

  return (
    <div>
      <p> Count is - {count} </p>
      <button onClick={() => setCount(count + 1)}>UPDATE </button>
    </div>
  );
};
export default MyComponents;
