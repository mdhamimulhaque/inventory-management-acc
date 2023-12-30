const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./routes/product.route");
const brandRoutes = require("./routes/brand.route");

// ===> middleware
app.use(express.json());
app.use(cors());

// ===> routes
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/brand", brandRoutes);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
