const mongoose = require("mongoose");
const DBURL = process.env.ATLAS_DBURL;
require("dotenv").config();

mongoose
  .connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
console.log("DB is working");
