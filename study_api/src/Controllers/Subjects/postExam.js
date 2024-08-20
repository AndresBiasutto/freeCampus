const {Exam, Subject} = require("../../db")
const getSubject = require("./getSubject")

const postExam=async (exam)=>{
    try {
        const newExam = await Exam.create({
          name: exam.name,
          date: exam.date,
          subjectId: exam.subjectId
        });
        const SubjectAndExam = await getSubject(exam.subjectId);
    
        return SubjectAndExam;
      } catch (error) {
        throw new Error("Error creating module: " + error.message);
      }
}

module.exports= postExam;