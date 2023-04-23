import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, resetCounter, decreaseCounter } from "../redux/counter/counterActions";

const Counter = () => {
   const count = useSelector((state) => state.counterState.count);
   // console.log(state);
   const dispatch = useDispatch();

   const increase = () => {
      dispatch(increaseCounter());
   };

   const reset = () => {
      dispatch(resetCounter());
   };

   const decrease = () => {
      dispatch(decreaseCounter());
   };

   return (
      <div>
         <h1>Counter value is: {count} </h1>
         <button onClick={decrease}>Decrease</button>
         <button onClick={reset}>Reset</button>
         <button onClick={increase}>Increase</button>
      </div>
   );
};

export default Counter;
