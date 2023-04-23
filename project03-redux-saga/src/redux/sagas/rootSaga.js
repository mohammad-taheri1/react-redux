import { takeEvery } from "redux-saga/effects";
import { GET_POSTS_ASYNC } from "../posts/postsActions";
import { handleGetPostsRequest } from "./handlers/users";

export function* watcherSaga() {
   yield takeEvery(GET_POSTS_ASYNC, handleGetPostsRequest);
}
