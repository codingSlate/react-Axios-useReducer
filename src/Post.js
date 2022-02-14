import React, { useContext } from 'react';
import { DataContext } from './context/fetchDataContext';
const Post = () => {
  const { state } = useContext(DataContext);
  // console.log(state);

  return (
    <>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}

      {state.post && (
        <div key={state.post.id}>
          <h3>{state.post.title}</h3>
          <p>{state.post.body}</p>
        </div>
      )}
    </>
  );
};
export default Post;
