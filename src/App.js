import React from 'react';
import './style.css';
// import Comp1 from './Comp1';
// import Comp2 from './Comp2';
import { FetchDataProvider } from './context/fetchDataContext';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Posts from './Posts';

export const App = () => {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <FetchDataProvider>
        {/* <Comp1 />
        <Comp2 /> */}
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>

          <Routes>
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </FetchDataProvider>
    </div>
  );
};
