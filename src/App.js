import React from 'react';
import './style.css';
// import Comp1 from './Comp1';
// import Comp2 from './Comp2';
import { FetchDataProvider } from './context/fetchDataContext';
import Post from './Post';

export const App = () => {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <FetchDataProvider>
        {/* <Comp1 />
        <Comp2 /> */}
        <Post />
      </FetchDataProvider>
    </div>
  );
};
