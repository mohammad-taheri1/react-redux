import { INCREASE, RESET, DECREASE } from "./counterActions";

// We need to have an initial state values
const initialState = {
   count: 0,
};

// Then we need to have the reducer

const counterReducer = (state = initialState, action) => {
   const { type } = action;
   switch (type) {
      case INCREASE:
         return {
            ...state,
            count: state.count + 1,
         };
      case RESET:
         return {
            ...state,
            count: 0,
         };

      case DECREASE:
         return {
            ...state,
            count: state.count - 1,
         };

      default:
         return state;
   }
};

export default counterReducer;
