import { toast } from "react-toastify";
import { put } from "redux-saga/effects";

export function* handleApiErrors(
  error: { response: { status: number, data: any } },
  defaultAction: Action<string>
): Saga<void> {
  console.log(error);

  toast(error);
  yield put(defaultAction);
}
