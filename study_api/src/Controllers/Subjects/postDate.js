const { ScheduleDate, Subject } = require("../../db");
const getSubject = require("./getSubject");

const postDate = async (date) => {
  try {
    await ScheduleDate.create({
      day: date.day,
      hour: date.hour,
      subjectName: date.subjectName,
      subjectId: date.subjectId,
    });
    const SubjectAndDate = await getSubject(date.subjectId);

    return SubjectAndDate;
  } catch (error) {
    throw new Error("Error creating module: " + error.message);
  }
};

module.exports = postDate;
