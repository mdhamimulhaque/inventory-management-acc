const User = require("../models/User");

exports.signUpUserService = (data) => {
  const user = User.create(data);
  return user;
};
