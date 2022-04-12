import { actionTypes } from "../../constants/actionTypes";

const initialState = {
  data: [],
  requesting: false,
  success: false,
  error: false,
};

export const addToListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_LIST_REQUESTING: {
      return {
        requesting: true,
        success: false,
        error: false,
      };
    }
    case actionTypes.GET_DATA_SUCCESS: {
      return {
        requesting: false,
        success: true,
        error: false,
        data: [...state.data, ...action.payload],
      };
    }
    case actionTypes.ADD_TO_LIST_SUCCESS: {
      return {
        requesting: false,
        success: true,
        error: false,
        data: [...state.data, action.payload],
      };
    }
    case actionTypes.EDIT_TO_LIST_SUCCESS: {
      return {
        requesting: false,
        success: true,
        error: false,
        data: [
          // ...state?.data,
          ...state.data.map((item, i) => {
            if (i === action.payload.index) {
              return { ...action.payload.data };
            } else {
              return item;
            }
          }),
        ],
      };
    }
    case actionTypes.EDIT_CHECK_SUCCESS: {
      return {
        requesting: false,
        success: true,
        error: false,
        data: [
          ...state.data.map((item, i) => {
            if (action.payload.data === false) {
              return { ...item, isChecked: true };
            }
            if (i === action.payload.index) {
              return { ...item, isChecked: action.payload.checkingState };
            } else {
              return item;
            }
          }),
        ],
      };
    }
    case actionTypes.ADD_TO_LIST_ERROR: {
      return {
        requesting: false,
        success: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
