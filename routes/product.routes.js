const express = require("express");
const {
  uploadImages,
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const productRoutes = express.Router();

productRoutes.get("/", getAllProducts);
productRoutes.post("/add", uploadImages, addProduct);
productRoutes.patch("/update/:id", uploadImages, updateProduct);
productRoutes.delete("/delete/:id", deleteProduct);

module.exports = productRoutes;
console.log("Product routes working");
