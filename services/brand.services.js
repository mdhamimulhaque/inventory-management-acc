const Brand = require("../models/Brand");

exports.getBrandsService = async () => {
  const brands = await Brand.find({}).select("-products -suppliers");
  return brands;
};

exports.createBrandByIdService = async (data) => {
  const result = await Brand.create(data);
  return result;
};

exports.getBrandByIdService = async (brandId) => {
  const result = await Brand.findOne({ _id: brandId });
  return result;
};

exports.updateBrandByIdService = async (brandId, data) => {
  const brand = await Brand.updateOne({ _id: brandId }, data, {
    runValidators: true,
  });
  return brand;
};

exports.deleteBrandByIdService = async (brandId) => {
  const brand = await Brand.deleteOne({ _id: brandId });
  return brand;
};
