const { Subject, Module, Chapter, Exam } = require("../../db");
const deleteFile = require("./SubjectModules/ModuleChapters/ChapterFiles/deleteFile");
const getSubject = require("./getSubject");

const deleteSubject = async (id) => {
  try {
    const subjectSelected = await getSubject(id);
    console.log(subjectSelected);
    if (subjectSelected.examDates) {
      await subjectSelected.examDates.forEach((exam) => {
        Exam.destroy({
          where: { id: exam.id },
        });
      });
    }
    if (subjectSelected?.Modules) {
      for (const module of subjectSelected.Modules) {
        if (module?.chapters) {
          for (const chapter of module.chapters) {
            if (chapter?.Files) {
              for (const file of chapter.Files) {
                await deleteFile(file.id); // Eliminar cada archivo
              }
            }
            await Chapter.destroy({ where: { id: chapter.id } }); // Eliminar cada capítulo
          }
        }
        await Module.destroy({ where: { id: module.id } }); // Eliminar cada módulo
      }
    }

    const subjectName = subjectSelected?.name;
    await Subject.destroy({ where: { id: id } }); // Eliminar la materia

    return [`Subject ${subjectName} deleted.`];
  } catch (error) {
    throw new Error(`Failed to delete subject: ${error.message}`);
  }
};

module.exports = deleteSubject;
