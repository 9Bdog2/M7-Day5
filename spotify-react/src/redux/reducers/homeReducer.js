import { initialState } from "../store";
import { SET_SONGS } from "../actions";

const homeReducer = (state = initialState.home.content, action) => {
  
  const { type } = action;

  switch (type) {
    case SET_SONGS:
      return {
        ...state,
        content: {
          ...state.content,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

export default homeReducer;
