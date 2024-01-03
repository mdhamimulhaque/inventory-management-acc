const {
  createStockService,
  getStocksService,
} = require("../services/stock.service");

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
      message: "stock couldn't inserted!",
      error: error.message,
    });
  }
};

exports.getStocks = async (req, res, next) => {
  try {
    let filters = { ...req.query };
    const excludeFields = ["sort", "page", "limit"];
    excludeFields.forEach((field) => delete filters[field]);

    let queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    console.log(queries);
    const stocks = await getStocksService(filters, queries);

    res.status(200).json({
      status: true,
      message: "data get successfully",
      data: stocks,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "stock couldn't get!",
      error: error.message,
    });
  }
};
