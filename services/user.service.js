const User = require("../models/User");

exports.signUpUserService = (data) => {
  const user = User.create(data);
  return user;
};

exports.getUserByEmail = (email) => {
  const user = User.findOne({ email });
  return user;
};
