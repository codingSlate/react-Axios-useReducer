import React, { useContext } from 'react';
import { CounterContext } from './App';
const Comp1 = () => {
  const counterCtx = useContext(CounterContext);
  console.log({ ...counterCtx });
  return (
    <div className="container">
      <p>I am component 1  Count : {counterCtx.countState}</p>
      <button onClick={() => counterCtx.counterDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => counterCtx.counterDispatch('decrement')}>
        Descrement
      </button>
      <button onClick={() => counterCtx.counterDispatch('reset')}>Reset</button>
    </div>
  );
};
export default Comp1;
