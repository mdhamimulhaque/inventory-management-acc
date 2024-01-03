const { createStockService } = require("../services/stock.service");

exports.createStock = async (req, res, next) => {
  try {
    const stock = await createStockService(req.body);

    res.status(200).json({
      status: true,
      message: "stock inserted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "stock isn't inserted!",
      error: error.message,
    });
  }
};
