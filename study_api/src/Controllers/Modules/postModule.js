const { Module, File, Subject } = require("../../db");

const postModule = async (moduleData) => {
  try {
    const newModule = await Module.create({
      name: moduleData.name,
      description: moduleData.description,
      subjectId: moduleData.subjectId, // Set subjectId here
    });

    // Relacionar los archivos, si se proporcionan
    if (moduleData.fileId) {
      const files = await File.findAll({
        where: {
          id: moduleData.fileId,
        },
      });
      await newModule.addFiles(files);
    }

    // Obtener el nuevo módulo con los archivos relacionados
    const moduleWithFiles = await Module.findByPk(newModule.id, {
      include: [
        {
          model: File,
          attributes: ["id", "data"],
        },
        {
          model: Subject,
          as: "Subject",
          attributes: ["id", "name"],
        },
      ],
    });

    return moduleWithFiles;
  } catch (error) {
    throw new Error("Error creating module: " + error.message);
  }
};

module.exports = postModule;
