const { User, Role } = require("../../db");
const formatUser = require("../../libs/formatUser");

const getUsers = async () => {
  try {
    const users = await User.findAll({ include: Role });
    //const formatedUsers = users.map((usr) => formatUser(usr));
    return users;
  } catch (error) {
    console.error("Error al obtener la lista de usuarios:", error);
    throw error;
  }
};

module.exports = getUsers;
