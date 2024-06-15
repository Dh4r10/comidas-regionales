import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { ListasProvider } from "./contexts/ListasContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { SalonPedidosProvider } from "./contexts/SalonPedidosContext.jsx";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ListasProvider>
          <SalonPedidosProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </SalonPedidosProvider>
        </ListasProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
