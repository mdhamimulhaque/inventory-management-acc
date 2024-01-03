const Stock = require("../models/Stock");

exports.createStockService = async (data) => {
  const result = Stock.create(data);
  return result;
};
