const { Subject, User } = require("../../db");

const getStudentSubjects = async (id) => {
    const allSubjects = Subject.findAll({
        where:{
            enrolledSubjects:[id]
        },
        include: [
          {
            model: User,
            as: 'creator',
            attributes: ["id", "name"],
          }
        ],
      });
    
      return allSubjects;
};

module.exports = getStudentSubjects;