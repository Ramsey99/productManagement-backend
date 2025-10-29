const express = require("express");
const {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.controller");
const categoryRoutes = express.Router();

categoryRoutes.get("/", getAllCategories);
categoryRoutes.post("/add", addCategory);
categoryRoutes.patch("/update/:id", updateCategory);
categoryRoutes.delete("/delete/:id", deleteCategory);

module.exports = categoryRoutes;
console.log("Category routes working");
