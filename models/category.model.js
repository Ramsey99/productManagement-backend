const mongoose = require("../db/db");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category is required"],
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Category = mongoose.model("categoryModel", categorySchema, "category");
module.exports = Category;
console.log("Category model is working");
