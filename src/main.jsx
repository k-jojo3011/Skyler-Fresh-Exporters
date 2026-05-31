import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CurrencyProvider } from "./context/CurrencyContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <BrowserRouter basename="/Skyler-Fresh-Exporters">
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
    </BrowserRouter>
  </React.StrictMode>
);

