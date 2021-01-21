const { INTEGER, STRING } = require("sequelize");
const electron = require("electron");
// const userDataPath = (electron.app || electron.remote.app).getPath("userData");
const userDataPath = `C:/Users/rac_r/AppData/Roaming/poc`;
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
