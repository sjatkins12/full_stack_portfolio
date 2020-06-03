export const REQUEST_FACE_DETECTION = "REQUEST_FACE_DETECTION";
export const UPDATE_DETECTED_FACE = "UPDATE_DETECTED_FACE";
export const RESET_DETECTED_FACE = "RESET_DETECTED_FACE";
export const CANCEL_FACE_DETECTION = "CANCEL_FACE_DETECTION";

export function requestFaceDetection(image) {
  return {
    type: REQUEST_FACE_DETECTION,
    image: image,
  };
}

export function updateDetectedFace(image) {
  return {
    type: UPDATE_DETECTED_FACE,
    detectedFace: image,
  };
}

export function resetDetectedFace() {
  return {
    type: RESET_DETECTED_FACE,
  };
}

export function cancelFaceDetection() {
  return {
    type: CANCEL_FACE_DETECTION,
  };
}
