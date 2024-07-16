const { Subject, Module, User } = require("../../db");

const postSubject = async (subjectData) => {
  try {
    const newSubject = await Subject.create({
      id: subjectData.id,
      name: subjectData.name,
      description: subjectData.description,
      semester: subjectData.semester,
      department: subjectData.department,
      creatorId: subjectData.creatorId,
      image: subjectData.image
    });

    if (subjectData.moduleId && subjectData.moduleId.length > 0) {
      const modules = await Module.findAll({
        where: {
          id: subjectData.moduleId,
        },
      });
      await newSubject.addModules(modules);
    }

    const subjectWithDetails = await Subject.findByPk(newSubject.id, {
      include: [
        {
          model: Module,
          attributes: ["id", "name", "description"],
        },
        {
          model: User,
          as: 'creator',
          attributes: ["id", "name"],
        },
      ],
    });

    return subjectWithDetails;
  } catch (error) {
    throw new Error("Error creating subject with module and creator: " + error.message);
  }
};

module.exports = postSubject;
