const {
  getCategoriesService,
  createCategoriesService,
} = require("../services/category.service");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await getCategoriesService();

    res.status(200).json({
      status: true,
      message: "Data get successfully",
      data: categories,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Couldn't get category data",
      error: error.message,
    });
  }
};

exports.createCategories = async (req, res, next) => {
  try {
    const result = await createCategoriesService(req.body);

    res.status(200).json({
      status: true,
      message: "Data created successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Couldn't created category data",
      error: error.message,
    });
  }
};
