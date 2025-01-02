import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";
const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8002/api/");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-card-info">
      {products.map((product, index) => (
        <Card className="m-2 rounded shadow-lg" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={product.image}
            height="200"
            width="200"
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Link className="btn btn-primary mr-2" to={`/${product.id}`}>
              Show Details
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ShowProducts;
