const Supplier = require("../models/Supplier");

exports.getSupplierService = async () => {
  const result = await Supplier.find({});
  return result;
};

exports.createSupplierService = async (data) => {
  const result = await Supplier.create(data);
  return result;
};
