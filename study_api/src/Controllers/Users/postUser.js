const { User } = require("../../db");

const postUser = (image, name, created) => {
  const newUser = User.create({ image, name, created });
  return newUser;
};

module.exports = postUser;
