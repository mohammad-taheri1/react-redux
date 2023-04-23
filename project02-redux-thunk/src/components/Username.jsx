import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername, resetUsername } from "../redux/username/usernameActions";

const Username = () => {
   const inputRef = useRef(null);

   const username = useSelector((state) => state.usernameState.username);
   const dispatch = useDispatch();

   const update = () => {
      const newUsername = inputRef.current.value;
      dispatch(updateUsername(newUsername));
   };
   const clear = () => {
      dispatch(resetUsername());
   };

   return (
      <div>
         <h1>Username is: {username}</h1>
         <input type="text" ref={inputRef} />
         <button onClick={update}>Update</button>
         <button onClick={clear}>Clear</button>
      </div>
   );
};

export default Username;
