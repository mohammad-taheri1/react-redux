import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync } from "../redux/posts/postsActions";

const Posts = () => {
   const dispatch = useDispatch();
   const postsState = useSelector((state) => state.postsState);

   const getPostsFromServer = () => {
      dispatch(getUsersAsync());
   };

   return (
      <div>
         <h1>Posts</h1>
         <button onClick={getPostsFromServer}>Get Posts from server</button>
         {postsState.isLoading && <h1>Loading</h1>}
         {postsState.error && <h1>{postsState.error}</h1>}

         {!postsState.isLoading &&
            !postsState.error &&
            postsState.posts.map((post) => (
               <div key={post.id} style={{ border: "1px solid #0000ff", borderRadius: "16px" }}>
                  <h3>{post.title}</h3>
                  <h6>{post.body}</h6>
               </div>
            ))}
      </div>
   );
};

export default Posts;
