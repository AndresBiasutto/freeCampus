const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const chapter = require("./models/chapter");
require("dotenv").config();
const { DATABASE_URL, //local
        POSTGRE_DB  //deploy
   } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  // dialectOptions: {
  //   ssl:{require:true,
  //        rejectUnauthorized: false,
  //   },
  // },
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

const { User, Subject, File, Role, Module, Video, Chapter, Exam, ScheduleDate } = sequelize.models;

// Associations
User.belongsTo(Role, { foreignKey: "role" });

User.belongsToMany(Subject, { through: "UserSubject", as: "enrolledSubjects" });
Subject.belongsToMany(User, { through: "UserSubject", as: "students" });

// File.belongsTo(Module, { foreignKey: "moduleId", as: "Module" });
// Module.hasMany(File, { foreignKey: "moduleId", as: "Files" });
Subject.hasMany(Module, { foreignKey: "subjectId" });
Module.belongsTo(Subject, { foreignKey: "subjectId" });

User.hasMany(Subject, { as: "createdSubjects", foreignKey: "creatorId" });
Subject.belongsTo(User, { as: "creator", foreignKey: "creatorId" });

Module.hasMany(Chapter, { foreignKey: "moduleId", as: "chapters" });
Chapter.belongsTo(Module, { foreignKey: "moduleId", as: "module" });
File.belongsTo(Chapter, { foreignKey: "chapterId", as: "Chapter" });
Chapter.hasMany(File, { foreignKey: "chapterId", as: "Files" });
Chapter.belongsTo(Video, { foreignKey: "videoId" });
Video.hasOne(Chapter, { foreignKey: "videoId" });
Exam.belongsTo(Subject, { foreignKey: "subjectId", as: "subject" });
Subject.hasMany(Exam, { foreignKey: "subjectId", as: "examDates" });
ScheduleDate.belongsTo(Subject, { foreignKey: "subjectId", as: "subject" });
Subject.hasMany(ScheduleDate, { foreignKey: "subjectId", as: "scheduleDates" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
