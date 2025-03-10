import React, { useContext, useState } from "react";
import { productStore } from "../store/product.store";

const Createpage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const { createProduct } = useContext(productStore);

  const handleSubmit = async () => {
    const product = { name, price, imageUrl };
    setName("");
    setPrice("");
    setImageUrl("");
    createProduct(product);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Enter Product Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="Number"
          value={price}
          placeholder="Enter the price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={imageUrl}
          placeholder="Enter the image url"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default Createpage;
