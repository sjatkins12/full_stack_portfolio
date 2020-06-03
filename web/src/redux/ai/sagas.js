import { call, takeLatest, put } from "redux-saga/effects";
import { handleApiErrors } from "../utils";
import { startFaceDetection, pollFaceDetection } from "./api";
import { REQUEST_FACE_DETECTION, updateDetectedFace } from "./actions";

function* faceDetectionWorker(action): Saga<void> {
  try {
    const taskId = yield call(startFaceDetection, action.image);
    const image = yield call(pollFaceDetection, taskId);
    yield put(updateDetectedFace(image));
  } catch (e) {
    yield call(handleApiErrors, e, { type: "FACE_DETECTION_ERROR" });
  }
}

export function* aiSaga(): Saga<void> {
  yield takeLatest(REQUEST_FACE_DETECTION, faceDetectionWorker);
}
