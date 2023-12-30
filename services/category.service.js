const Category = require("../models/Category");

exports.getCategoriesService = async () => {
  const categories = await Category.find({});
  return categories;
};
