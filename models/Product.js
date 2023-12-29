const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types;

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
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: "unit value can't be [VALUE], must be kg/litre/pcs/bag",
      },
    },
    imgURLs: [
      {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (!Array.isArray(value)) {
              return false;
            }

            let isValid = true;

            value.forEach((url) => {
              if (!validator.isURL(url)) {
                return (isValid = false);
              }
            });

            return isValid;
          },
          message: "Please provide valid image urls",
        },
      },
    ],

    category: {
      type: String,
      required: true,
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
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
