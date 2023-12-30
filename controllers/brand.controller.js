const { getBrandsService } = require("../services/brand.services");

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
