import { initialState } from "../store";
import { FETCH_SONGS } from "../actions";

const homeReducer = (state = initialState.home.content, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SONGS:
      return {
        ...state,
        content: payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
