const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.post("/signup", userController.signUpUser);

router.post("/login", userController.loginUser);

module.exports = router;
