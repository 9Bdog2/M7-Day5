import { initialState } from "../store/index.js";

export default function albumReducer(state = initialState.album, action) {
  console.log(action, state);
  const { type, payload } = action;
  switch (type) {
    case "GET_ALBUM":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
