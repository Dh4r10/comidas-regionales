import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";

// MODULO DE SALÓN
import { salonPaths } from "./utils/routes/SalonRoutes";
import Comedor from "./modules/Salon/pages/Comedor";
import ListaMesas from "./modules/Salon/pages/ListaMesas";

// MODULO DE SEGURIDAD
import { seguridadPaths } from "./utils/routes/SeguridadRoutes";
import IniciarSesion from "./modules/Seguridad/pages/IniciarSesion";
import ReestablecerContrasenia from "./modules/Seguridad/pages/ReestablecerContrasenia";
import ActualizarContrasenia from "./modules/Seguridad/pages/ActualizarContrasenia";

//MODULO DE MANTENIMIENTO
import Estableciminetos from "./modules/Mantenimiento/pages/Establecimientos/Establecimientos";
import { matenimientoPaths } from "./utils/routes/MantenimientoRoutes";
import Sucursales from "./modules/Mantenimiento/pages/Sucursales/Sucursales";
function App() {
  return (
    <div className="h-screen bg-slate-100 dark:bg-[#161616]">
      <Routes>
        <Route path={seguridadPaths[0].path} element={<IniciarSesion />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Navigate to={salonPaths[1].path} />} />
          <Route path={salonPaths[0].path} element={<ListaMesas />} />
          <Route path={salonPaths[1].path} element={<Comedor />} />
          <Route
            path={matenimientoPaths[0].path}
            element={<Estableciminetos />}
          />
          <Route path={matenimientoPaths[1].path} element={<Sucursales />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
