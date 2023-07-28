import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import "./index.css";
import App from "./App";
import { Provider } from "./context/context";

ReactDOM.render(
  <SpeechProvider appId="7f392927-c806-4b8b-8ccb-09db50eca580" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
