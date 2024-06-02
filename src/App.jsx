import MenuLateral from "./components/MenuLateral";
import { Navigate, Route, Routes } from "react-router-dom";
import { salonPaths } from "./utils/routes/SalonRoutes";
import Prueba from "./modules/Salon/pages/Prueba";
import PruebaDos from "./modules/Salon/pages/PruebaDos";

function App() {
  return (
    <div className="h-screen bg-slate-50">
      <MenuLateral>
        <Routes>
          <Route path="/" element={<Navigate to={salonPaths[0].path} />} />
          <Route path={salonPaths[0].path} element={<Prueba />} />
          <Route path={salonPaths[1].path} element={<PruebaDos />} />
        </Routes>
      </MenuLateral>
    </div>
  );
}

export default App;
