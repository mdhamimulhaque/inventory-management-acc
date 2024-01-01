const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a brand name"],
      unique: true,
      lowercase: true,
      maxLength: [100, "You cross the maximum limit"],
    },
    description: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    website: {
      type: String,
      lowercase: true,
      validate: [validator.isURL, "Please provide a valid URL"],
    },
    location: {
      type: String,
    },
    products: [
      {
        type: ObjectId,
        required: true,
        ref: "Product",
      },
    ],
    suppliers: [
      {
        name: String,
        contactNumber: String,
        id: {
          type: ObjectId,
          ref: "Supplier",
        },
      },
    ],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
