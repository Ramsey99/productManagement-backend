const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/db");
const categoryRoutes = require("./routes/category.routes");
const subCategoryRoutes = require("./routes/subCategory.routes");
const productRoutes = require("./routes/product.routes");

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subCategoryRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Product Management Express API</h1>");
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
