const express = require("express");
const brandController = require("../controllers/brand.controller");

const router = express.Router();

router.route("/").get(brandController.getBrands);

module.exports = router;
