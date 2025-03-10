import { createContext, useState } from "react";
import { api } from "../api/AxiosApi";

export const productStore = createContext({
  products: [],
  fetchProducts: () => {},
  createProduct: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
});

const ProductStoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const createProduct = async (product) => {
    await api.post("/products", product, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const deleteProduct = async (id) => {
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <productStore.Provider
      value={{
        products,
        fetchProducts,
        createProduct,
        deleteProduct,
      }}
    >
      {children}
    </productStore.Provider>
  );
};

export default ProductStoreProvider;
