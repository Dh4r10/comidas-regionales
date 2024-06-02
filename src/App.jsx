import { useState } from "react";
import MenuLateral from "./components/MenuLateral";
import { Navigate, Route, Routes } from "react-router-dom";
import { salonPaths } from "./utils/routes/SalonRoutes";
import Prueba from "./modules/Salon/pages/Prueba";

function App() {
  return (
    <div className="h-screen bg-slate-50">
      <MenuLateral>
        <Routes>
          <Route path="/" element={<Navigate to={salonPaths[0].path} />} />
          <Route path={salonPaths[0].path} element={<Prueba />} />
        </Routes>
      </MenuLateral>
    </div>
  );
}

export default App;
