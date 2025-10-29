const mongoose = require("../db/db");

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subcategory is required"],
      trim: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categoryModel",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SubCategory = mongoose.model(
  "subCategoryModel",
  subCategorySchema,
  "subcategory"
);
module.exports = SubCategory;
console.log("SubCategory model is working");
