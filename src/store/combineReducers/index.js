import { combineReducers } from "redux";
import { addToListReducer } from "../reducers/addToList";

export const rootReducer = combineReducers({
  addToListReducer,
});
