import { combineReducers } from "redux";
// import { adminReducer } from "./admin";
import { currentUserReducer } from "./currentUser";
import { productsReducer } from "./products";
import { productReducer } from "./product";

export default combineReducers({
  // admin: adminReducer,
  currentUser: currentUserReducer,
  products: productsReducer,
  product: productReducer,
});
