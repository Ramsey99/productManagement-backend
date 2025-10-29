const mongoose = require("../db/db");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categoryModel",
      required: true,
    },
    subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subCategoryModel",
      required: true,
    },
    images: [String],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("productModel", productSchema, "products");
module.exports = Product;
console.log("Product model is working");
