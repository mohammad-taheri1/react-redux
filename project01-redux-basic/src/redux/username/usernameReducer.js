import { UPDATE_USERNAME, RESET_USERNAME } from "./usernameActions";
// We need to have an initial state values
const initialState = {
   username: "",
};

// Then we need to have the reducer
const usernameReducer = (state = initialState, action) => {
   const { type, payload } = action;
   switch (type) {
      case UPDATE_USERNAME:
         return {
            ...state,
            username: payload,
         };

      case RESET_USERNAME:
         return {
            ...state,
            username: "",
         };

      default:
         return state;
   }
};

export default usernameReducer;
