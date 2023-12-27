const {
  getProductsService,
  createProductService,
  updateProductByIdService,
  bulkUpdateProductService,
  deleteProductByIdService,
  bulkProductDeleteService,
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

exports.bulkUpdateProduct = async (req, res, next) => {
  try {
    const product = await bulkUpdateProductService(req.body);

    res.status(200).json({
      status: true,
      message: "Given product data updated successfully!",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Given product data isn't updated!",
      error: error.message,
    });
  }
};

exports.deleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await deleteProductByIdService(id);

    if (!product.deletedCount) {
      res.status(400).json({
        status: false,
        message: "Product couldn't deleted",
      });
    }

    res.status(200).json({
      status: true,
      message: "product deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Couldn't deleted product!",
      error: error.message,
    });
  }
};

exports.bulkDeleteProduct = async (req, res, next) => {
  try {
    const products = await bulkProductDeleteService(req.body.ids);
    res.status(200).json({
      status: true,
      message: "Products deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "couldn't deleted products!",
      message: error.message,
    });
  }
};
