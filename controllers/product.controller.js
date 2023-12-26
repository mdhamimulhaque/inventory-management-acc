const {
  getProductsService,
  createProductService,
  updateProductByIdService,
} = require("../services/product.services.js");

exports.getProducts = async (req, res, next) => {
  try {
    const products = await getProductsService();

    res.status(200).json({
      status: true,
      message: "Data get successfully!",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data isn't get!",
      error: error.message,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = await createProductService(req.body);

    product.logger();

    res.status(200).json({
      status: true,
      message: "Data inserted successfully!",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data isn't inserted!",
      error: error.message,
    });
  }
};

exports.updateProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await updateProductByIdService(id, req.body);

    res.status(200).json({
      status: true,
      message: "Data updated successfully!",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Data isn't updated!",
      error: error.message,
    });
  }
};
