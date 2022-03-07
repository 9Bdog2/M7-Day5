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
    artistsSongs: [],
  },
  albums: {
    albumsSongs: [],
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  likes: likesReducer,
  home: homeReducer,
});

<<<<<<< Updated upstream
const configureStore = createStore(
=======
 const configureStore = createStore(
>>>>>>> Stashed changes
  mainReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

<<<<<<< Updated upstream
export default configureStore;
=======
export default configureStore;
>>>>>>> Stashed changes
