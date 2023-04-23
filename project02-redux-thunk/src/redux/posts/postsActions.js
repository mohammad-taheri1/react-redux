import axios from "axios";

// Action (names)
export const GET_POSTS_REQUEST_SENT = "GET_POSTS_REQUEST_SENT";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

// in Actions we return an object {type, payload}

// These Are the action Creator functions
export const getPostsRequestSent = () => {
   const actionOBject = {
      type: GET_POSTS_REQUEST_SENT,
   };
   return actionOBject;
};

export const getPostsSuccess = (posts) => {
   const actionOBject = {
      type: GET_POSTS_SUCCESS,
      payload: posts,
   };
   return actionOBject;
};

export const getPostsFailure = (errorMessage) => {
   const actionOBject = {
      type: GET_POSTS_FAILURE,
      payload: errorMessage,
   };
   return actionOBject;
};

// Also, When we are using redux thunk, We can return a function in our action creator

// This is a new Action Creator that works only with Redux-Thunk Middleware
export const getUsersAsync = () => {
   // inside of this function, we return another function
   return (dispatch) => {
      // Business logic
      // First, we need to set our loading to true
      dispatch(getPostsRequestSent());
      axios
         .get("https://jsonplaceholder.typicode.com/posts")
         .then((reponse) => {
            const posts = reponse.data;
            dispatch(getPostsSuccess(posts));
         })
         .catch((error) => {
            const errorMessage = error.message;
            dispatch(getPostsFailure(errorMessage));
         });
   };
};
