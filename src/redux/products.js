import axios from "axios";

const FETCH_PRODUCTS = "FETCH_PRODUCTS";
const PRODUCTS_ERROR = "PRODUCTS_ERROR";

export const productsSelector = (state) => {
  return state.products;
};

const initialState = {
  products: [],
  error: null,
};

// 1) the default state is set to null to indicate user's initial logged in status (unknown)
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case PRODUCTS_ERROR:
      const error = new Error(action.payload);
      return { ...state, error: error.message };
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
      dispatch({ type: PRODUCTS_ERROR, payload: err });
    }
  };
