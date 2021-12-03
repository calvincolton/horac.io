import axios from "axios";

const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
const UPDATE_CURRENT_USER = "UPDATE_CURRENT_USER";
const CURRENT_USER_ERROR = "CURRENT_USER_ERROR";

export const currentUserSelector = (state) => {
  return state.currentUser;
};

const initialState = {
  currentUser: null,
  error: null,
};

// 1) the default state is set to null to indicate user's initial logged in status (unknown)
export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case UPDATE_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case CURRENT_USER_ERROR:
      const error = new Error(action.payload);
      return { ...state, error: error.message };
    default:
      return state;
  }
};

export const fetchUser = () => async (dispatch) => {
  try {
    const res = await axios.get("www.horac.io/api/current_user");
    dispatch({ type: FETCH_CURRENT_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: CURRENT_USER_ERROR, payload: err });
  }
};

export const updateUser =
  (userProps, callback = () => {}) =>
  async (dispatch) => {
    try {
      const res = await axios.put("/api/current_user", userProps);
      dispatch({ type: UPDATE_CURRENT_USER, payload: res.data });
      callback();
    } catch (err) {
      dispatch({ type: CURRENT_USER_ERROR, payload: err });
    }
  };
