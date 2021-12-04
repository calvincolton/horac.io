import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productsSelector } from "../../redux/products";
import Alert from "react-bootstrap/Alert";
import "./products.css";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const { products, error } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const callback = () => setLoading(false);
    dispatch(fetchProducts({ callback }));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error.products) {
    return <Alert variant="danger">{error}</Alert>;
  }

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
