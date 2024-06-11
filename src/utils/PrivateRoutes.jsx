import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import MenuLateral from "@/components/MenuLateral";
import AuthContext from "@/contexts/AuthContext";

const PrivateRoutes = () => {
  console.log("Private route potos!");
  let { user } = useContext(AuthContext);
  return user ? (
    <MenuLateral>
      <Outlet />
    </MenuLateral>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
