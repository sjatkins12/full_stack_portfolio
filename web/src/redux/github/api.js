import axios from "axios";
import type { Saga } from "redux-saga";
import { call } from "redux-saga/effects";

export function* getRepositories(): Saga<any> {
  const response = yield call(axios, {
    method: "GET",
    url: "https://api.github.com/users/sjatkins12/repos",
    params: {
      type: "owner",
      sort: "updated",
    },
  });
  return response.data;
}
