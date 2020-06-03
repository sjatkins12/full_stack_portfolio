import { call, takeEvery, put } from "redux-saga/effects";
import { handleApiErrors } from "../utils";
import { requestCVAPI } from "./api";
import { GET_CV, updateCV } from "./actions";

function* cvWorker(action): Saga<void> {
  try {
    const cv = yield call(requestCVAPI);
    yield put(updateCV(cv));
  } catch (e) {
    yield put(updateCV("failure"));
    yield call(handleApiErrors, e, { type: "GET_CV_ERROR" });
  }
}
export function* contactInfoSaga(): Saga<void> {
  yield takeEvery(GET_CV, cvWorker);
}
