import React, { useEffect, useState } from "react";
import Api from "../../service/api";

export default function Product() {
  const [products, setProducts]  = useState([]);

  useEffect(() => {
    loadProducts();
    console.log('render');
  }, []);

  const loadProducts = async () => {
    const response = await Api.get("/products");
    setProducts(response.data.docs);
  };

  return (
      <div>
          {products.map(product =>(
              <div key={product._id}>
                  <h1>{product.title}</h1>
              </div>
          ))}
      </div>
  );
}
