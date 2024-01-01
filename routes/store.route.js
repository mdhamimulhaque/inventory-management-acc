const express = require("express");
const storeController = require("../controllers/store.controller");

const router = express.Router();

router.route("/").get(storeController.getStores);

module.exports = router;
