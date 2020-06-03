import axios from "axios";
import type { Saga } from "redux-saga";
import { call } from "redux-saga/effects";

export function* requestCVAPI(): Saga<any> {
  console.log("trying api");
  const response = yield call(axios, {
    method: "GET",
    url: "http://localhost:5000/cv",
    responseType: "blob",
  });
  console.log(response);
  const blob = new Blob([response.data], { type: "application/pdf" });
  return blob;
  //   return URL.createObjectURL(new Blob([response.data], {type: "application/pdf"}));
}
