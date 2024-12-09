import axios from "axios";
import {
  SET_USERS_FAILURE,
  SET_USERS_REQUEST,
  SET_USERS_SUCCESS,
} from "../utils/constants";

export const setUsersRequest = () => {
  return {
    type: SET_USERS_REQUEST,
  };
};

export const setUsersSuccess = (users) => {
  return {
    type: SET_USERS_SUCCESS,
    users,
  };
};

export const setUsersFailure = () => {
  return {
    type: SET_USERS_FAILURE,
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(setUsersRequest());
      const { data } = await axios.get(
        "https://randomuser.me/api/?results=10&nat=in&gender=male"
      );
      dispatch(setUsersSuccess(data.results));
    } catch (error) {
      console.error(error);
      dispatch(setUsersFailure());
    }
  };
};
