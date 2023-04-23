import axios from "axios";

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export const getUserAsyncCall = () => {
   return axios.get(postsUrl);
};
