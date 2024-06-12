import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";

// MODULO DE SALÓN
import { salonPaths } from "./utils/routes/SalonRoutes";
// import Comedor from "./modules/Salon/pages/Comedor";
// import ListaMesas from "./modules/Salon/pages/ListaMesas";

// MODULO DE SEGURIDAD
import { seguridadPaths } from "./utils/routes/SeguridadRoutes";
import IniciarSesion from "./modules/Seguridad/pages/IniciarSesion";
import ReestablecerContrasenia from "./modules/Seguridad/pages/ReestablecerContrasenia";
import ActualizarContrasenia from "./modules/Seguridad/pages/ActualizarContrasenia";
import ListaUsuarios from "./modules/Seguridad/pages/ListaUsuarios";
import InformacionUsuario from "./modules/Seguridad/pages/InformacionUsuario";
import CrearUsuario from "./modules/Seguridad/pages/CrearUsuario";
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
          <Route path="/" element={<Navigate to={seguridadPaths[3].path} />} />
         {/*  <Route path={salonPaths[0].path} element={<ListaMesas />} />
          <Route path={salonPaths[1].path} element={<Comedor />} /> */}

          <Route path={seguridadPaths[3].path} element={<ListaUsuarios />} />
          <Route path={seguridadPaths[4].path} element={<CrearUsuario />} />
          <Route path={seguridadPaths[5].path} element={<InformacionUsuario />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
