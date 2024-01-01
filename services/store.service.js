const Store = require("../models/Store");

exports.getStoresService = async () => {
  const stores = await Store.find({});
  return stores;
};
