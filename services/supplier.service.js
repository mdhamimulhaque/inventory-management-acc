const Supplier = require("../models/Supplier");

exports.getSupplierService = async () => {
  const result = await Supplier.find({});
  return result;
};
