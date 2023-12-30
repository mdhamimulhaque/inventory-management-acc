const {
  getBrandsService,
  createBrandByIdService,
} = require("../services/brand.services");

exports.getBrands = async (req, res, next) => {
  try {
    const brands = await getBrandsService();

    res.status(200).json({
      status: true,
      message: "Data get successfully",
      data: brands,
    });
  } catch (error) {
    res.status(400).json({ status: false, error: "Couldn't get the brands" });
  }
};

exports.createBrandById = async (req, res, next) => {
  try {
    const result = await createBrandByIdService(req.body);
    res.status(200).json({
      status: true,
      message: "Brand created successfully!",
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, error: "Couldn't Create the brands" });
  }
};
