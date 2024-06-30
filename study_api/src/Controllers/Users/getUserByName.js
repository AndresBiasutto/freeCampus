const { User, Subject } = require("../../db");
const { Op } = require("sequelize");

const getUserByName = async (searchName) => {
  const fetchedStudents = await User.findAll({
    where: {
      name: {
        [Op.iLike]: `%${searchName}%`
      }
    },
    include:{
    model: Subject,
    as: "enrolledSubjects",
    attributes: ["name", "id", "creatorId"],
  },
  

});
  return fetchedStudents;
};

module.exports = getUserByName;
