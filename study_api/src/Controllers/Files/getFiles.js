const { File, Module } = require("../../db");

const getFiles = async () => {
  try {
    const allFiles = await File.findAll({
      include: {
        model: Module,
        as: 'Module', // Asegúrate de que este alias coincida con el alias definido en la asociación
        attributes: ["id", "name", "description"],
      },
    });
    return allFiles;
  } catch (error) {
    throw new Error(`Failed to fetch files: ${error.message}`);
  }
};

module.exports = getFiles;
