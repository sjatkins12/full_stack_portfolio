import { UPDATE_SIDEBAR } from "./actions";

const initialState = false;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIDEBAR:
      return action.open;
    default:
      return state;
  }
};
