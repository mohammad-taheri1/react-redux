import { call, put } from "redux-saga/effects";
import { getUserAsyncCall } from "../api-calls/posts";
import { getPostsSuccess, getPostsFailure, getPostsRequestSent } from "../../posts/postsActions";

// This is handler
export function* handleGetPostsRequest(action) {
   try {
      // First we set loading to true and then call our api
      yield put(getPostsRequestSent());
      const { data } = yield call(getUserAsyncCall);
      // if success, we can call our actions (dispatch)
      yield put(getPostsSuccess(data));
   } catch (error) {
      const errorMessage = error.message;
      yield put(getPostsFailure(errorMessage));
   }
}
