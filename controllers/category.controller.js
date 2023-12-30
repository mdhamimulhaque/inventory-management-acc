const { getCategoriesService } = require("../services/category.service");

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
      error: "Couldn't get category data",
    });
  }
};
