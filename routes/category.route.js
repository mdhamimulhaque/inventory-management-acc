const express = require("express");
const categoryController = require("../controllers/category.controller");

const router = express.Router();

router
  .route("/")
  .get(categoryController.getCategories)
  .post(categoryController.createCategories);

router.route("/:id").get(categoryController.getCategoryById);

module.exports = router;
