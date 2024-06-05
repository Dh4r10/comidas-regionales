import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";

// MODULO DE SALÓN
import { salonPaths } from "./utils/routes/SalonRoutes";
import Mesas from "./modules/Salon/pages/Mesas";

// MODULO DE SEGURIDAD

import { seguridadPaths } from "./utils/routes/SeguridadRoutes";
import IniciarSesion from "./modules/Seguridad/pages/IniciarSesion";
import ReestablecerContrasenia from "./modules/Seguridad/pages/ReestablecerContrasenia";
import ActualizarContrasenia from "./modules/Seguridad/pages/ActualizarContrasenia";

function App() {
  return (
    <div className="h-screen bg-slate-100 dark:bg-[#161616]">
      <Routes>
        <Route path={seguridadPaths[0].path} element={<IniciarSesion />} />
        <Route
          path={seguridadPaths[0].path + seguridadPaths[1].path}
          element={<ReestablecerContrasenia />}
        />
        <Route
          path={seguridadPaths[2].path}
          element={<ActualizarContrasenia />}
        />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Navigate to={salonPaths[0].path} />} />
          <Route path={salonPaths[0].path} element={<Mesas />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
