import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TradesProvider } from "./context/TradeContext";

ReactDOM.render(
  <TradesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TradesProvider>,
  document.getElementById("root")
);
