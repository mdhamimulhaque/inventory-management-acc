const mongoose = require("mongoose");

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

module.exports = Product;
