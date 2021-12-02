import axios from "axios";

const FETCH_USER = "FETCH_USER";
const UPDATE_USER = "UPDATE_USER";
const USER_ERROR = "USER_ERROR";

const initialState = {
  user: null,
  error: null,
};

// 1) the default state is set to null to indicate user's initial logged in status (unknown)
export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    case USER_ERROR:
      const error = new Error(action.payload);
      return { ...state, error: error.message };
    default:
      return state;
  }
};

export const fetchUser = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/current_user`);
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: USER_ERROR, payload: err });
  }
};

export const updateUser =
  (userProps, callback = () => {}) =>
  async (dispatch) => {
    try {
      const res = await axios.put(`/api/current_user`, userProps);
      dispatch({ type: UPDATE_USER, payload: res.data });
      callback();
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err });
    }
  };
