import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { ListasProvider } from "./contexts/ListasContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ListasProvider>
          <App />
        </ListasProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
