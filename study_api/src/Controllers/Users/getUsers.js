const { User, Role, Subject } = require("../../db");

const getUsers = async () => {
  try {
    const users = await User.findAll({ 
      include: [
        {
          model: Role,
          attributes: ["name", "id"],
        },
        {
          model: Subject,
          as: "enrolledSubjects",
          attributes: ["name", "id", "creatorId"],
        },
      ],
    });
    return users;
  } catch (error) {
    console.error("Error al obtener la lista de usuarios:", error);
    throw error;
  }
};

module.exports = getUsers;
