import { initialState } from "../store/index.js";

const likeReducer = (state = initialState.likes, action) => {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        likeSongs: [...state.likeSongs, action.payload],
      };
    case "REMOVE_LIKE":
      return {
        ...state,
        likeSongs: [
          ...state.likeSongs.filter(
            (element) => element._id !== action.payload._id
          ),
        ],
      };
    default:
      return state;
  }
};

export default likeReducer;
