import axios from "axios";

// Action (names)
export const GET_POSTS_ASYNC = "GET_POSTS_ASYNC";
export const GET_POSTS_REQUEST_SENT = "GET_POSTS_REQUEST_SENT";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

// in Actions we return an object {type, payload}

// These Are the action Creator functions
export const getPostsAsync = () => {
   const actionOBject = {
      type: GET_POSTS_ASYNC,
   };
   return actionOBject;
};

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
