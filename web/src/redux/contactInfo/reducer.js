import { UPDATE_CV } from "./actions";

const initialState = {
  simpleInfo: {
    name: "Samuel Atkins",
    email: "sjatkins12@gmail.com",
  },
  cv: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CV:
      return { ...state, cv: action.cv };
    default:
      return state;
  }
}
