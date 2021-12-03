import axios from "axios";

const FETCH_PRODUCT_DETAILS = "FETCH_PRODUCT_DETAILS";
const UPDATE_PRODUCT_DETAILS = "UPDATE_PRODUCT_DETAILS";
const PRODUCT_DETAIL_ERROR = "PRODUCT_DETAIL_ERROR";

export const productDetailsSelector = (state) => {
  return state.productDetails;
};

const initialState = {
  productDetails: {},
  error: null,
};

// 1) the default state is set to null to indicate user's initial logged in status (unknown)
export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS:
    case UPDATE_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case PRODUCT_DETAIL_ERROR:
      const error = new Error(action.payload);
      return { ...state, error: error.message };
    default:
      return state;
  }
};

export const fetchProductDetails =
  ({ productId, callback = () => {} }) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${productId}`
      );
      callback();
      dispatch({ type: FETCH_PRODUCT_DETAILS, payload: res.data });
    } catch (err) {
      dispatch({ type: PRODUCT_DETAIL_ERROR, payload: err });
    }
  };

export const updateProductDetails =
  ({ productId, props, callback = () => {} }) =>
  async (dispatch) => {
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/albums/${productId}`,
        props
      );
      callback();
      dispatch({ type: FETCH_PRODUCT_DETAILS, payload: res.data });
    } catch (err) {
      dispatch({ type: PRODUCT_DETAIL_ERROR, payload: err });
    }
  };
