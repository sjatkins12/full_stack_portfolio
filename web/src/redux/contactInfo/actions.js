export const UPDATE_CV = "UPDATE_CV";
export const GET_CV = "GET_CV";

export function updateCV(cv) {
  return {
    type: UPDATE_CV,
    cv,
  };
}

export function requestCV() {
  return {
    type: GET_CV,
  };
}
