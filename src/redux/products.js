import axios from "axios";

const FETCH_PRODUCTS = "FETCH_PRODUCTS";
const FETCH_PRODUCT_DETAILS = "FETCH_PRODUCT_DETAILS";
const UPDATE_PRODUCT_DETAILS = "UPDATE_PRODUCT_DETAILS";
const PRODUCTS_ERROR = "PRODUCTS_ERROR";
const PRODUCT_DETAILS_ERROR = "PRODUCT_DETAILS_ERROR";

export const productsSelector = (state) => {
  return state.products;
};

const initialState = {
  products: [],
  productDetails: {},
  error: {
    products: null,
    productDetails: null,
  },
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case FETCH_PRODUCT_DETAILS:
    case UPDATE_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case PRODUCTS_ERROR:
      return { ...state, error: { ...error, products: action.payload } };
    case PRODUCT_DETAILS_ERROR:
      const error = new Error(action.payload);
      return { ...state, error: { ...error, productDetails: action.payload } };
    default:
      return state;
  }
};

export const fetchProducts =
  ({ callback = () => {} }) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      callback();
      dispatch({ type: FETCH_PRODUCTS, payload: res.data });
    } catch (err) {
      const error = new Error(err);
      dispatch({ type: PRODUCTS_ERROR, payload: error });
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
      const error = new Error(err);
      dispatch({ type: PRODUCT_DETAILS_ERROR, payload: error });
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
      const error = new Error(err);
      dispatch({ type: PRODUCT_DETAILS_ERROR, payload: error });
    }
  };
