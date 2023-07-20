import React, { useState } from "react";
import { Counter } from "./components/Counter";
import Button from "./components/Button";
import "./styles/app.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="main">
      <h1>Simple React App</h1>
      <Counter count={count} />
      <Button action={increment} backgroundColor="green" title="Increment" />
      <Button action={decrement} backgroundColor="red" title="Decrement" />
    </div>
  );
}

export default App;
