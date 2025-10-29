const express = require("express");
const {
  getAllSubCategories,
  addSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategory.controller");
const subCategoryRoutes = express.Router();

subCategoryRoutes.get("/", getAllSubCategories);
subCategoryRoutes.post("/add", addSubCategory);
subCategoryRoutes.patch("/update/:id", updateSubCategory);
subCategoryRoutes.delete("/delete/:id", deleteSubCategory);

module.exports = subCategoryRoutes;
console.log("Sub Category routes working");
