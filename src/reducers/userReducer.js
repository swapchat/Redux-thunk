import {
  SET_USERS_FAILURE,
  SET_USERS_REQUEST,
  SET_USERS_SUCCESS,
} from "../utils/constants";

const initialState = {
  isLoading: false,
  errorMsg: "",
  data: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: "",
      };
    case SET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.users,
      };

    case SET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMsg: "Error while getting list of users. Please try again",
      };

    default:
      return state;
  }
};
export default userReducer;
