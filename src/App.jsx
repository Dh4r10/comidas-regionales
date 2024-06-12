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

// MODULO COMPRAS
import { comprasPaths } from "./utils/routes/ComprasRoutes";
import Compras from "./modules/Compras/pages/Compras";
import Proveedores from "./modules/Compras/pages/Proveedores";
import RegistrarProveedor from "./modules/Compras/pages/RegistrarProveedor";
import RealizarCompra from "./modules/Compras/pages/RealizarCompras/RealizarCompra";
import Productos from "./modules/Compras/pages/Insumos";
import Almacen from "./modules/Compras/pages/Almacen";
import Detalle from "./modules/Compras/pages/DetalleCompra/Detalle";
import Insertar from "./modules/Compras/pages/DetalleCompra/Insert/Insertar";
import RegistrarInsumo from "./modules/Compras/pages/Insumos/RegistrarInsumo";
import Ubicacion from "./modules/Compras/pages/Ubicacion/Ubicacion";
import Pasillo from "./modules/Compras/pages/Pasillo";

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
          <Route path="/" element={<Navigate to={salonPaths[1].path} />} />
          <Route path={salonPaths[0].path} element={<ListaMesas />} />
          <Route path={salonPaths[1].path} element={<Comedor />} />
          <Route path={comprasPaths[0].path} element={<Compras />} />
          <Route path={comprasPaths[1].path} element={<Proveedores />} />
          <Route
            path={comprasPaths[1].path + comprasPaths[2].path}
            element={<RegistrarProveedor />}
          />
          <Route
            path={comprasPaths[0].path + comprasPaths[3].path}
            element={<RealizarCompra />}
          />
          <Route path={comprasPaths[5].path} element={<Almacen />} />
          <Route path={comprasPaths[4].path} element={<Productos />} />
          <Route path={comprasPaths[6].path} element={<Detalle />} />
          <Route
            path={comprasPaths[6].path + comprasPaths[7].path}
            element={<Insertar />}
          />
          <Route
            path={comprasPaths[4].path + comprasPaths[8].path}
            element={<RegistrarInsumo />}
          />
          <Route path={comprasPaths[9].path} element={<Ubicacion />} />
          <Route path={comprasPaths[10].path} element={<Pasillo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
