const { User, Role, Subject, Exam, ScheduleDate } = require("../../db");

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
          attributes: ["name", "id", "creatorId", "image", "dateStart", "dateEnd"],
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
          ]
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
