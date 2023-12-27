const Product = require("../models/Product.js");

exports.getProductsService = async (filters, queries) => {
  const products = await Product.find({})
    .select(queries.fields)
    .sort(queries.sortBy);

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

exports.bulkUpdateProductService = async (data) => {
  const products = [];

  data.ids.forEach((product) =>
    products.push(Product.updateOne({ _id: product.id }, product.data))
  );

  const result = await Promise.all(products);

  return result;
};
exports.deleteProductByIdService = async (productId) => {
  const product = await Product.deleteOne({ _id: productId });
  return product;
};
exports.bulkProductDeleteService = async (ids) => {
  const product = await Product.deleteMany({});
  return product;
};
