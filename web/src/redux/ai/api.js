import axios from "axios";
import type { Saga } from "redux-saga";
import { call, delay } from "redux-saga/effects";

export function* startFaceDetection(file): Saga<any> {
  const formData = new FormData();
  formData.append("image", file, "image.png");

  const response = yield call(axios, {
    method: "POST",
    url: "http://localhost:5000/face",
    data: formData,
  });
  return response.data.task_id;
}

export function* pollFaceDetection(taskId) {
  return yield getStatus(taskId);
}

export function* getStatus(taskId) {
  const response = yield call(axios, {
    method: "GET",
    url: "http://localhost:5000/face",
    params: {
      task_id: taskId,
    },
    responseType: "blob",
  });

  if (response.status === 204) {
    yield delay(2000);
    return yield getStatus(taskId);
  }
  return URL.createObjectURL(response.data);
}
