import { actionTypes } from "../../constants/actionTypes";

export const addToList = (data) => {
  return {
    type: actionTypes.ADD_TO_LIST_SUCCESS,
    payload: data,
  };
};
