import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import albumsReducer from "../reducers/albumReducer";

export const initialState = {
  /*  likes: {
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
    artistsSongs: [],
  }, */
  albums: {
    albumsSongs: [],
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  albums: albumsReducer,
  /* artists: artistsReducer,
  likes: likesReducer,
  home: homeReducer, */
});

export default createStore(
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
