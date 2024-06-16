import React from "react";
import { useDispatch } from "react-redux";
import { add, minus } from "../Redux/counter1Slice";

export default function CounterCard({ number, count, max }) {
  const dispatch = useDispatch();
  
  const handleIncrement = () => {
    dispatch(add(number));
  };

  const handleDecrement = () => {
    dispatch(minus(number));
  };

  return (
    <div>
    <div className="border border-3 rounded-3 p-1">
      <div>
        Counter {number} 
        <button 
          className="mx-1 btn btn-outline-dark rounded-circle" 
          onClick={handleDecrement}
        >
          -
        </button> 
        {count}
        <button 
          onClick={handleIncrement} 
          className="mx-1 btn btn-outline-dark rounded-circle"
        >
          +
        </button>
      </div>
    </div>
    {count === max  && (
        <span className="text-danger">
          Counter {number} has reached the maximum value {max}
        </span>
      )}
    </div>
  );
}
