const { ipcMain } = require("electron");
const Records = require("../database/model");

ipcMain.on("asynchronous-message", async (event, arg) => {
  const record = await Records.create({ name: "UI" });
  console.log(record);
});
