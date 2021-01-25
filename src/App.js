import React, { useState } from "react";

import sendAsync from "./message-control/renderer";

import "./App.css";

function App() {
  function send(sql) {
    sendAsync(sql);
  }

  return (
    <div className="App">
      <button type="button" onClick={() => send("message")}>
        Send
      </button>
    </div>
  );
}

export default App;
