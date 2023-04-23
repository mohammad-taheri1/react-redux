import { GET_POSTS_REQUEST_SENT, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from "./postsActions";

// We need to have an initial state values
const initialState = {
   isLoading: false,
   posts: [],
   error: "",
};

// Then we need to have the reducer
const postsReducer = (state = initialState, action) => {
   const { type, payload } = action;
   switch (type) {
      case GET_POSTS_REQUEST_SENT:
         return {
            ...state,
            isLoading: true,
         };
      case GET_POSTS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            posts: payload,
            error: "",
         };

      case GET_POSTS_FAILURE:
         return {
            ...state,
            isLoading: false,
            posts: [],
            error: payload,
         };

      default:
         return state;
   }
};

export default postsReducer;
