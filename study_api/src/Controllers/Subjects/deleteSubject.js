const { Subject, Module, Chapter, Exam, ScheduleDate } = require("../../db");
const deleteFile = require("./SubjectModules/ModuleChapters/ChapterFiles/deleteFile");
const getSubject = require("./getSubject");

const deleteSubject = async (id) => {
  try {
    const subjectSelected = await getSubject(id);
    console.log(subjectSelected);

    // Eliminar las fechas programadas asociadas a la asignatura
    await ScheduleDate.destroy({
      where: { subjectId: id },
    });

    if (subjectSelected.examDates) {
      for (const exam of subjectSelected.examDates) {
        await Exam.destroy({
          where: { id: exam.id },
        });
      }
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
