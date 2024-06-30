const { Module, File, Subject } = require("../../db");

const postModule = async (moduleData) => {
  try {
    const newModule = await Module.create({
      name: moduleData.name,
      description: moduleData.description,
      subjectId: moduleData.subjectId,
    });

    // Obtener el nuevo módulo con los archivos relacionados
    const moduleAndFiles = await Module.findByPk(newModule.id, {
      include: 
        {
          model: Subject,
          as: "Subject",
          attributes: ["id", "name"],
        },

    });

    return moduleAndFiles;
  } catch (error) {
    throw new Error("Error creating module: " + error.message);
  }
};

module.exports = postModule;
