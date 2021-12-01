import React, { useEffect } from "React";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../redux/products";
import "./products.css";

const Products = () => {
  const { products, loading, error } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
