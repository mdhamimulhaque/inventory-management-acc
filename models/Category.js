const mongoose = require("mongoose");
const validator = require("validator");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a category name"],
      trim: true,
      unique: true,
      maxLengthL: 100,
      lowercase: true,
    },
    description: String,
    imageURL: {
      type: String,
      validate: [validator.isURL, "Please provide a valid URL"],
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
