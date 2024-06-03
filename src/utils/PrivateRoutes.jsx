import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
// import AuthContext from "../contexts/AuthContext";
import MenuLateral from "@/components/MenuLateral";

const PrivateRoutes = () => {
  // console.log("Private route potos!");
  // let { user } = useContext(AuthContext);
  const user = true;
  return user ? (
    <MenuLateral>
      <Outlet />
    </MenuLateral>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
