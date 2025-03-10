import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Createpage from "./pages/Createpage";
import AppLayout from "./components/AppLayout";
import ProductStoreProvider from "./store/product.store.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/create",
          element: <Createpage />,
        },
      ],
    },
  ]);
  return (
    <ProductStoreProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProductStoreProvider>
  );
}

export default App;
