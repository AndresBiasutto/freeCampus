require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
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
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Subject, File, Role, Module } = sequelize.models;

User.belongsTo(Role, { foreignKey: "role" });
User.belongsToMany(Subject, { through: "UserSubject" });
Subject.belongsToMany(User, { through: "UserSubject" });

// File.belongsToMany(Module, { through: "FileModule" });
// Module.belongsToMany(File, { through: "FileModule" });

File.belongsTo(Module, { foreignKey: "moduleId", as: "Module" });
Module.hasMany(File, { foreignKey: 'moduleId', as: 'Files' });

Subject.hasMany(Module, { foreignKey: 'subjectId' });
Module.belongsTo(Subject, { foreignKey: 'subjectId' });

User.hasMany(Subject, { as: 'createdSubjects', foreignKey: 'creatorId' });
Subject.belongsTo(User, { as: 'creator', foreignKey: 'creatorId' });


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
