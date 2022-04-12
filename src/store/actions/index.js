import { actionTypes } from "../../constants/actionTypes";

export const getData = (data) => {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    payload: data,
  };
};

export const addToList = (data) => {
  return {
    type: actionTypes.ADD_TO_LIST_SUCCESS,
    payload: data,
  };
};

export const editList = (data, index) => {
  return {
    type: actionTypes.EDIT_TO_LIST_SUCCESS,
    payload: { data, index },
  };
};

export const editCheck = (data, index, checkingState, allChecked) => {
  return {
    type: actionTypes.EDIT_CHECK_SUCCESS,
    payload: { data, index, checkingState, allChecked },
  };
};
