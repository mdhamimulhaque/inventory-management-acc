const Store = require("../models/Store");

exports.getStoresService = async () => {
  const stores = await Store.find({});
  return stores;
};

exports.createStoreService = async (data) => {
  const stores = await Store.create(data);
  return stores;
};
