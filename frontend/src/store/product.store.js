import { Children, createContext, useEffect, useState } from "react";

const productStore = createContext({});

const productStoreProvider = ({ Children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {}, []);
  const addInitialPosts = () => {};

  return <productStore.Provider value={{ products }}></productStore.Provider>;
};
