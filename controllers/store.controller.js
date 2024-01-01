const { getStoresService } = require("../services/store.service");

exports.getStores = async (req, res, next) => {
  try {
    const stores = await getStoresService();
    res.status(200).json({
      status: true,
      message: "Data get successfully",
      data: stores,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Could't get the store",
      error: error.message,
    });
  }
};
