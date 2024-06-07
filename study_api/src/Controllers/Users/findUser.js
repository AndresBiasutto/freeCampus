const { User, Role } = require("../../db");
const formatUser = require("../../libs/formatUser");

const findUser = async (id) => {
  const user = await User.findByPk(id, { include: Role });
  const formatedUser = formatUser(user);
  console.log(user);
  return formatedUser;
};

module.exports = findUser;
