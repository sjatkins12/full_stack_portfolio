import { UPDATE_REPOSITORIES } from "./actions";

const initialState = {
  repositories: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_REPOSITORIES:
      return { ...state, github: { repositories: action.repositories } };
    default:
      return state;
  }
}
