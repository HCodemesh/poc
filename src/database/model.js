const { INTEGER, STRING } = require("sequelize");
const electron = require("electron");
const userDataPath = (electron.app || electron.remote.app).getPath("userData");
const DB = require("./db");
const newDb = DB(userDataPath);

const Records = newDb.define("carts", {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: STRING,
});
// newDb.sync({ force: true });

module.exports = Records;
