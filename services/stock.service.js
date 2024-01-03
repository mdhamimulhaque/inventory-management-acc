const Stock = require("../models/Stock");

exports.createStockService = async (data) => {
  const result = await Stock.create(data);
  return result;
};

exports.getStocksService = async (filters, queries) => {
  const stocks = await Stock.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);
  return stocks;
};
