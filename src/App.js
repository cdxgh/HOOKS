import React, { useEffect } from "react";
import MyComponents from "./Component/counter";

export default function App() {
  useEffect(() => {
    console.log("I AM MOUNTING...");
  }, []);

  return (
    <div className="App">
      <MyComponents />
    </div>
  );
}
