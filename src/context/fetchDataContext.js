import React, { useEffect, useReducer, createContext } from 'react';
import axios from 'axios';

export const DataContext = createContext();

const initialState = {
  loading: true,
  error: null,
  post: {},
};

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: null,
        post: action.payload,
      };
    case 'FETCH_FAIL':
      return {
        loading: false,
        error: 'Something went wrong',
        post: {},
      };
    default:
      return state;
  }
};

export const FetchDataProvider = ({ children }) => {
  // call useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_FAIL' });
      });
  }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {/* {state.loading ? 'Loading...' : state.post.title}
      {state.error ? error : null} */}
      {children}
    </DataContext.Provider>
  );
};