import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import albumsReducer from "../reducers/albumReducer";
import artistsReducer from "../reducers/artistReducer";
import likesReducer from "../reducers/likeReducer";
import homeReducer from "../reducers/homeReducer";

export const initialState = {
  likes: {
    likeSongs: [],
  },
  home: {
    content: {
      hipHop: [],
      pop: [],
      rock: [],
    },
  },
  artists: {
    artistsData: {},
    artistsSongs: [],
  },
  albums: {
    albumsSongs: [],
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const mainReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  likes: likesReducer,
  home: homeReducer,
});

export default createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
