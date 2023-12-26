const Product = require("../models/Product.js");

exports.getProductsService = async () => {
  const products = await Product.find({});
  //   .select({ name: 1, quantity: 1, _id: 0 })
  //   .where("name")
  //   .equals("Bag")
  //   .where("quantity")
  //   .gte("5")
  //   .lt("100")
  //   .limit(2)
  //   .sort({ quantity: 1 });

  return products;
};

exports.createProductService = async (data) => {
  const product = new Product(data);
  const result = await product.save();
  return result;
};

exports.updateProductByIdService = async (productId, data) => {
  const product = await Product.updateOne({ _id: productId }, data, {
    runValidators: true,
  });
  return product;
};
