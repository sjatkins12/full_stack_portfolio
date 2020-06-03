import { UPDATE_DETECTED_FACE, RESET_DETECTED_FACE } from "./actions";

const initialState = {
  detectedFace: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DETECTED_FACE:
      return { ...state, detectedFace: action.detectedFace };
    case RESET_DETECTED_FACE:
      return { ...state, detectedFace: null };
    default:
      return state;
  }
}
