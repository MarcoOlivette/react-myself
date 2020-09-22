import React, { useEffect, useState} from "react";
import Api from "../../services/api";
import './styles.css'

export default function Product(){

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  })

  const getProduct = async () => {
    // const { id } = this.props.match.params;
    const response = await Api.get(`/products/5b6b31eb31762700049b33df`);
    setProduct(response.data);
  }

  return (
    <h1>
      <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
              URL: <a href={product.url} target="_.blanket">{product.url}</a>
          </p>
      </div>
    </h1>
  );
} 