const { User } = require("../../db");

const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    const userName= user.name;
  await User.destroy({ where: { id: id } });

  return {data:`El usuario ${userName} fue eliminado correctamente`}
};

module.exports = deleteUser;
