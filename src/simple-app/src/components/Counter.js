import React from "react";
import "../styles/counter.css";

export function Counter({ count }) {
  return (
    <div className="container">
      <p className="title">Count: {count}</p>
      <p className="info">
        {count < 0 ? (
          <span className="text-negative">Count is negative!!</span>
        ) : null}
        {count > 5 ? (
          <span className="text-positive">Count is greater than 5!!</span>
        ) : null}
      </p>
    </div>
  );
}
