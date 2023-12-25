const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

// created schema
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value can't be [VALUE], must be kg/litre/pcs",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity can't be negative"],
      validate: {
        validator: function (value) {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
        message: (props) => `${props.value} is not an integer number!`,
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {VALUE}",
      },
    },
  },
  {
    timestamps: true,
  }
);

// mongoose middleware
productSchema.pre("save", function (next) {
  if (this.quantity === 0) {
    this.status = "out-of-stock";
  }
  next();
});

// methods
productSchema.methods.logger = function () {
  console.log(` Data saved for ${this.name}`);
};
// created model
const Product = mongoose.model("product", productSchema);

app.post("/api/v1/product", async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();

    result.logger();

    res.status(200).json({
      status: true,
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data isn't inserted!",
      error: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

module.exports = app;
