const {
  getStoresService,
  createStoreService,
} = require("../services/store.service");

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

exports.createStore = async (req, res, next) => {
  try {
    const result = await createStoreService(req.body);
    res.status(200).json({
      status: true,
      message: "Data created successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Could't created the store",
      error: error.message,
    });
  }
};
