import { call, takeEvery, put } from "redux-saga/effects";
import { getRepositories } from "./api";
import { updateRepositories, REQUEST_REPOSITORIES } from "./actions";

function* requestRepositoriesWorker(): Saga<void> {
  const repositories = yield call(getRepositories);
  yield put(updateRepositories(repositories));
}

export function* githubSaga(): Saga<void> {
  yield takeEvery(REQUEST_REPOSITORIES, requestRepositoriesWorker);
}
