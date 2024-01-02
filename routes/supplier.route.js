const express = require("express");
const supplierController = require("../controllers/supplier.controller");

const router = express.Router();

router
  .route("/")
  .get(supplierController.getSupplier)
  .post(supplierController.createSupplier);

module.exports = router;
