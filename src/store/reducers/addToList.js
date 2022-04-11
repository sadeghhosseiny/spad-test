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
    case actionTypes.ADD_TO_LIST_SUCCESS: {
      return {
        requesting: false,
        success: true,
        error: false,
        data: [...state.data, action.payload],
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
