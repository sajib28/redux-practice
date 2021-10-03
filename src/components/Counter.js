import React from "react";
import { add, sub } from "./reactRedux/actions/counter";
import { useDispatch, useSelector } from "react-redux";
export default function Counter() {
  const counter = useSelector((c) => c.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Result: {counter}</h2>
      <button onClick={() => dispatch(add())}>+Add</button>
      <button onClick={() => dispatch(sub())}>-Sub</button>
    </div>
  );
}
