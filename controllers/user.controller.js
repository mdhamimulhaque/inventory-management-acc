const { signUpUserService } = require("../services/user.service");

exports.signUpUser = async (req, res, next) => {
  try {
    const user = await signUpUserService(req.body);

    res.status(200).json({
      status: true,
      message: "Successfully signed up",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};
