import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelector } from "../../redux/products";
import "./products.css";

const Products = () => {
  const { products, error } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  console.log(products);

  return (
    <div className="products">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
