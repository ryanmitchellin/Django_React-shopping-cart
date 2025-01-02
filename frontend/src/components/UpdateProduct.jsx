import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const loadProduct = async () => {
    const result = await axios.get(`http://localhost:8002/api/${id}/`);
    console.log(result.data.name);
    setImage(result.data.image);
    setName(result.data.name);
    setPrice(result.data.price);
    setDescription(result.data.description);
    setCategory(result.data.category);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const UpdateProductInfo = async () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("price", price);
    formField.append("description", description);
    formField.append("category", category);
    if (image !== null) {
      formField.append("image", image);
    }
      await axios({
        method: "put",
        url: `http://localhost:8002/api/${id}/`,
        data: formField,
      }).then((response) => {
        console.log(response.data);
        navigate("/");
      });
  };

  return (
    <div>
      <h1>Update Page</h1>
      <div className="form-group">
        <img src={image} height="200" width="300" />
        <input
          type="file"
          className="form-control form-control-lg"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Product Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Product Price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Product Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Product Category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button className="btn btn-success" onClick={UpdateProductInfo}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
