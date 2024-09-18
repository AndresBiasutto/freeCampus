const { User, Role, Subject, Exam, ScheduleDate } = require("../../db");
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
        attributes: ["name", "id", "creatorId", "description", "image", "dateStart", "dateEnd"],
        include:[
          {
            model: Exam,
            as: "examDates",
            attributes: ["id", "name", "date"]
          },
          {
            model: ScheduleDate,
            as: "scheduleDates",
            attributes: ["id", "day", "hour", "subjectName"]
          },
          {
            model: User,
            as: "creator",
            attributes: ["id", "name"],
          },
        ]
      },
      {
        model: Subject,
        as: "createdSubjects",
        attributes:["id", "name", "image"]
      }
    ],
  });
  const formatedUser = formatUser(user);
  console.log(formatedUser);
  return formatedUser;
};

module.exports = findUser;
