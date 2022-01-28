import { GET_ARTIST_SONGS } from "../actions";
import { GET_ARTIST_DATA } from "../actions";

import { initialState } from "../store";

const artistReducer = (state = initialState.artists, action) => {
  switch (action.type) {
    case GET_ARTIST_SONGS:
      return {
        ...state,
        artistsSongs: action.payload,
      };
    case GET_ARTIST_DATA:
      return {
        ...state,
        artistsData: action.payload,
      };

    default:
      return state;
  }
};

export default artistReducer;
