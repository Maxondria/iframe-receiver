import React, { useState } from "react";
import { useEventListener } from "./hooks";


export default function App() {
  const [config, setConfig] = useState({
    color: "red",
    background: "yellow"
  });

  useEventListener("message", ({ data }) => {
    setConfig(JSON.parse(data));
    console.log("running");
    window.parent.postMessage("updates taken care of", "*");
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div style={{ backgroundColor: config.background }}>
        <h2 style={{ color: config.color }}>
          Start editing to see some magic happen!
        </h2>
      </div>
    </div>
  );
}