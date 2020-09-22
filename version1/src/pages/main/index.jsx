import React, { useState, useEffect } from "react";
import Api from "../../services/api";
import { Link } from "react-router-dom";

export default function Main() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    listProducts();
  }, []);

  const listProducts = async () => {
    const response = await Api.get(`/products`);
    setProduct(response.data.docs);
  };
  
  return (
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id}>
            <h1>{product.title}</h1>
            <Link to={`/products/${product._id}`}> Acessar</Link>
          </div>
        ))}
      </div>
    );
}