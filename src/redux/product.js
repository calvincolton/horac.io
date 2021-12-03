import axios from "axios";

const FETCH_PRODUCT = "FETCH_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const PRODUCT_ERROR = "PRODUCT_ERROR";

export const productSelector = (state) => {
  return state.product;
};

const initialState = {
  product: {},
  error: null,
};

// 1) the default state is set to null to indicate user's initial logged in status (unknown)
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
    case UPDATE_PRODUCT:
      return { ...state, product: action.payload };
    case PRODUCT_ERROR:
      const error = new Error(action.payload);
      return { ...state, error: error.message };
    default:
      return state;
  }
};

export const fetchProduct =
  ({ productId, callback = () => {} }) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${productId}`
      );
      callback();
      dispatch({ type: FETCH_PRODUCT, payload: res.data });
    } catch (err) {
      dispatch({ type: PRODUCT_ERROR, payload: err });
    }
  };

export const updateProduct =
  ({ productId, props, callback = () => {} }) =>
  async (dispatch) => {
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/albums/${productId}`,
        props
      );
      callback();
      dispatch({ type: FETCH_PRODUCT, payload: res.data });
    } catch (err) {
      dispatch({ type: PRODUCT_ERROR, payload: err });
    }
  };
