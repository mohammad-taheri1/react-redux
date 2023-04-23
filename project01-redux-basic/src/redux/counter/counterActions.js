// Action (names)
export const INCREASE = "INCREASE";
export const RESET = "RESET";
export const DECREASE = "DECREASE";

// in Actions we return an object {type, payload}

// These Are the action Creator functions
export const increaseCounter = () => {
   const actionObject = {
      type: INCREASE,
   };
   return actionObject;
};

export const resetCounter = () => {
   const actionObject = {
      type: RESET,
   };
   return actionObject;
};

export const decreaseCounter = () => {
   const actionObject = {
      type: DECREASE,
   };
   return actionObject;
};
