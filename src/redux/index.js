import { combineReducers } from "redux";
// import { adminReducer } from "./admin";
import { currentUserReducer } from "./currentUser";
import { productsReducer } from "./products";
// import { productDetailsReducer } from "./productDetails";

export default combineReducers({
  // admin: adminReducer,
  currentUser: currentUserReducer,
  products: productsReducer,
  // productDetails: productDetailsReducer,
});
