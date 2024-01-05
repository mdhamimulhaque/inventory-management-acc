const {
  signUpUserService,
  getUserByEmail,
} = require("../services/user.service");

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

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: false,
        error: "Please provide your credentials",
      });
    }

    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: false,
        error: "Please provide your credentials",
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: false,
        error: "Password is not correct",
      });
    }

    if (user.status != "active") {
      return res.status(401).json({
        status: false,
        error: "Your account is not active yet.",
      });
    }

    res.status(200).json({
      status: true,
      message: "Successfully logged in",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};
