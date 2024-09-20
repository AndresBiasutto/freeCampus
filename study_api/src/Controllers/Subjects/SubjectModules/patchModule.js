const { Module } = require("../../../db");

const patchModule = async (id, moduleData) => {
  try {
    const module = await Module.findByPk(id);

    if (!module) {
      throw new Error("Module not found");
    }

    const updatedModule = await module.update(moduleData);
    return updatedModule;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = patchModule;