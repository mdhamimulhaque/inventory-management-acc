const { getSupplierService } = require("../services/supplier.service");

exports.getSupplier = async (req, res, next) => {
  try {
    const suppliers = await getSupplierService();
    res.status(200).json({
      status: true,
      message: "supplier data get successfully",
      data: suppliers,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Could't get the supplier data",
      error: error.message,
    });
  }
};
