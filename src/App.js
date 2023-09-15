import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(100);
  const handleClick = () => {
    setCount((prev) => (prev % 2 === 0 ? prev + 1 : prev - 1));
  };
  //get sum of amount
  /* let obj = [{id: 1, amount: 20},{id: 3, amount: 30},{id: 2, amount: 50}]
   let rslt = obj.reduce((total,{amount})=>total + amount,0)
   console.log(rslt)*/
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <button onClick={handleClick}>Click Me</button>
      <h1> {count}</h1>
    </div>
  );
}
