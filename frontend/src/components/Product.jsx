import React, { useContext } from "react";
import { productStore } from "../store/product.store";

const Product = ({ product }) => {
  const { deleteProduct } = useContext(productStore);
  const handleDelete = async () => {
    try {
      const id = product._id;
      const res = deleteProduct(id);
    } catch (error) {
      console.log("Unable to delete the product");
    }
  };
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Product;
