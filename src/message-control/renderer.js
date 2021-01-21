export default function send(sql) {
  const { ipcRenderer, remote } = window.electron;
  return new Promise((resolve) => {
    ipcRenderer.once("asynchronous-reply", (_, arg) => {
      resolve(arg);
    });
    ipcRenderer.send("asynchronous-message", sql);
  });
}
