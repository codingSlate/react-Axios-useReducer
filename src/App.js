import React, { useReducer, createContext } from 'react';
import './style.css';
// import Comp1 from './Comp1';
// import Comp2 from './Comp2';
import DataFetchTwo from './DataFetchTwo';

export const App = () => {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {/* <Comp1 />
        <Comp2 /> */}
        <DataFetchTwo/>
    </div>
  );
};
