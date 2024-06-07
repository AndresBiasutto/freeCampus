const { Role } = require("../../db");

const postUser = (name) => {
  const newRole = Role.create({ name });
  return newRole;
};

module.exports = postUser;
