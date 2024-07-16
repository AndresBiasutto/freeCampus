const { User, Role, Subject } = require("../../db");
const formatUser = require("../../libs/formatUser");

const findUser = async (id) => {
  const user = await User.findByPk(id, {
    include: [
      {
        model: Role,
        attributes: ["id", "name"],
      },
      {
        model: Subject,
        as: "enrolledSubjects",
        attributes: ["name", "id", "creatorId", "description", "image"],
      },
    ],
  });
  const formatedUser = formatUser(user);
  console.log(formatedUser);
  return formatedUser;
};

module.exports = findUser;
