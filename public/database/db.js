const Sequelize = require("sequelize");
const path = require("path");

module.exports = function (userDataPath) {
  return new Sequelize({
    dialect: "sqlite",
    storage: path.join(userDataPath, "database.sqlite"),
    // sync: { force: true },
  });
};
