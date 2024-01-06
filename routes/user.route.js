const express = require("express");
const userController = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/verifyToken");
const authorization = require("../middlewares/authorization");

const router = express.Router();

router.post("/signup", userController.signUpUser);

router.post("/login", userController.loginUser);

router.get(
  "/me",
  verifyToken,
  authorization("admin", "store-manager"),
  userController.getMe
);

module.exports = router;
