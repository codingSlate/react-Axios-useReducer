import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: null,
  post: {}
}

// reducer function 
const reducer = (state, action)=>{
switch(action.type){
  case 'FETCH_SUCCESS':
    return {
      loading: false,
      error: null,
      post: action.payload
    }
  case 'FETCH_FAIL':
    return {
      loading: false,
      error: "Something went wrong",
      post: {}
    }
    default:
      return state
}
}
const DataFetchTwo = () =>{
  // call useReducer 
 const [state, dispatch] =  useReducer(reducer, initialState)

 useEffect(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
     dispatch({type:'FETCH_SUCCESS', payload: response.data})
    })
    .catch((err) => {
      dispatch({type:'FETCH_FAIL'})
    });
}, []);

    return(
      <div>
      {state.loading ? 'Loading...' : state.post.title}
      {state.error ? error : null}
    </div>
    )
}
export default DataFetchTwo