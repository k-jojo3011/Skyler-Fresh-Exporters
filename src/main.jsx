import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { CurrencyProvider } from "./context/CurrencyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrencyProvider>
      <BrowserRouter basename="/Skyler-Fresh-Exporters">
        <App />
      </BrowserRouter>
    </CurrencyProvider>
  </React.StrictMode>
);