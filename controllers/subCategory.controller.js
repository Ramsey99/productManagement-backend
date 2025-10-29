const SubCategory = require("../models/subCategory.model");

exports.getAllSubCategories = async (req, res) => {
  try {
    const subcategories = await SubCategory.find()
      .populate("categoryId", "name")
      .sort({ createdAt: -1 });
    res.status(200).json(subcategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.addSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.create({
      name: req.body.name,
      categoryId: req.body.categoryId,
    });
    res
      .status(200)
      .json({ message: "Sub Category added successfully", subcategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        categoryId: req.body.categoryId,
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Sub Category updated successfully", subcategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteSubCategory = async (req, res) => {
  try {
    await SubCategory.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Sub Category deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
