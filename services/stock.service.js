const Stock = require("../models/Stock");

exports.createStockService = async (data) => {
  const result = await Stock.create(data);
  return result;
};

exports.getStocksService = async (filters, queries) => {
  const stocks = await Stock.find(filters)
    .sort(queries.sortBy)
    .select(queries.fields);
  return stocks;
};
