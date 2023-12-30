const Category = require("../models/Category");

exports.getCategoriesService = async () => {
  const categories = await Category.find({});
  return categories;
};

exports.createCategoriesService = async (data) => {
  const category = await Category.create(data);
  return category;
};

exports.getCategoryByIdService = async (categoryId) => {
  const category = await Category.findOne({ _id: categoryId });
  return category;
};
