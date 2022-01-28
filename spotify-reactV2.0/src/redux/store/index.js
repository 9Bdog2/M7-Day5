import { createStore } from "redux";

export const initialState = {
  songs: {
    elements: [],
  },
};

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const mainReducer = (state = initialState, action) => {

}