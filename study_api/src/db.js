const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const { DATABASE_URL, //local
        POSTGRE_DB  //deploy
   } = process.env;

const sequelize = new Sequelize(POSTGRE_DB, {
  dialectOptions: {
    ssl:{require:true,
         rejectUnauthorized: false,
    },
  },
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

const { User, Subject, File, Role, Module, Video } = sequelize.models;

// Associations
User.belongsTo(Role, { foreignKey: "role" });
User.belongsToMany(Subject, { through: "UserSubject", as: "enrolledSubjects" });
Subject.belongsToMany(User, { through: "UserSubject", as: "students" });
File.belongsTo(Module, { foreignKey: "moduleId", as: "Module" });
Module.hasMany(File, { foreignKey: "moduleId", as: "Files" });
Subject.hasMany(Module, { foreignKey: "subjectId" });
Module.belongsTo(Subject, { foreignKey: "subjectId" });
User.hasMany(Subject, { as: "createdSubjects", foreignKey: "creatorId" });
Subject.belongsTo(User, { as: "creator", foreignKey: "creatorId" });
Module.belongsTo(Video, { foreignKey: "videoId" });
Video.hasOne(Module, { foreignKey: "videoId" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
