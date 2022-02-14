import React, { useContext } from 'react';
import { DataContext } from './context/fetchDataContext';
const Posts = () => {
  const { state } = useContext(DataContext);
  // console.log(state);

  return (
    <>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}

      {state.posts &&
        state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </>
  );
};
export default Posts;
