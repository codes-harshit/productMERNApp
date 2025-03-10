import mongoose from "mongoose";
import { Product } from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const { name, price, imageUrl } = req.body;

  if (!(name && price && imageUrl)) {
    return res.status(400).json({
      success: false,
      message: "Name, price and imageUrl are required",
    });
  }
  const product = new Product({ name, price, imageUrl });

  try {
    await product.save();
    return res.status(200).json({
      success: true,
      message: "Product saved successfully",
    });
  } catch (error) {
    console.log(`Unable to save product: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Unable to save product",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    await Product.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: `Product not found error: ${error}`,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      data: products,
      message: "Products fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Unable to fetch products: ${error}`,
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      data: "Invalid Product id.",
    });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      data: updatedProduct,
      message: "Product updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Unable to update product: ${error}`,
    });
  }
};
