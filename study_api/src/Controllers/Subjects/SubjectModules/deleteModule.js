const getModule = require("./getModule");
const { Module, Chapter}= require("../../../db")
const deleteFile= require("../SubjectModules/ModuleChapters/ChapterFiles/deleteFile")

const deleteModule = async (id) => {
  const selectedModule = await getModule(id);
console.log(selectedModule);

  if (selectedModule?.chapters) {
    for (const chapter of selectedModule.chapters) {
      if (chapter?.Files) {
        for (const file of chapter.Files) {
          await deleteFile(file.id); // Eliminar cada archivo
        }
      }
      await Chapter.destroy({ where: { id: chapter.id } }); // Eliminar cada capítulo
    }
  }
  await Module.destroy({ where: { id: selectedModule.id } }); // Eliminar cada módulo

  return `${selectedModule.name} fue borrado correctamente` ;
};

module.exports = deleteModule;
