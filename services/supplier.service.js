const Supplier = require("../models/Supplier");

exports.getSupplierService = async () => {
  const result = await Supplier.find({});
  return result;
};

exports.createSupplierService = async (data) => {
  const result = await Supplier.create(data);
  return result;
};

exports.updateSupplierService = async (supplierId, data) => {
  const result = await Supplier.updateOne({ _id: supplierId }, data, {
    runValidators: true,
  });
  return result;
};
