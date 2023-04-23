// Action (names)
export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const RESET_USERNAME = "RESET_USERNAME";

// in Actions we return an object {type, payload}

// These Are the action Creator functions
export const updateUsername = (username) => {
   const actionObject = {
      type: UPDATE_USERNAME,
      payload: username,
   };
   return actionObject;
};

export const resetUsername = () => {
   const actionObject = {
      type: RESET_USERNAME,
   };
   return actionObject;
};
