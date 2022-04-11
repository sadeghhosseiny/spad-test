import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./combineReducers";

const bindMiddleWare = (middleWare) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleWare));
  }
  return applyMiddleware(...middleWare);
};

export const store = createStore(rootReducer, bindMiddleWare([thunk]));
