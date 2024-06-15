import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import {
  LOGIN_TOKEN_API,
} from "../api/SeguridadAPI";
import { toast } from "react-toastify";
import { ESTABLECIMIENTO_API } from "@/api/MantenimientoAPI";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  const [establecimientoData, setEstablecimientoData] = useState(() => localStorage.getItem("establecimientoData") ? JSON.parse(localStorage.getItem("establecimientoData")) : null)

  const loginUser = (values) => {
    const { username, password } = values;

    axios
      .post(LOGIN_TOKEN_API, {
        username: username,
        password: password,
      })
      .then(function (response) {
        setAuthTokens(response.data);
        console.log(response);
        localStorage.setItem("authTokens", JSON.stringify(response.data))
        setUser(jwtDecode(response.data.token));
        getDataEstablecimiento(jwtDecode(response.data.token), response.data)
        navigate("/");
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
        toast.error("ALGO SALIÓ MAL");
      });
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("selectedKeys");
    localStorage.removeItem("stateOpenKeys");
    localStorage.removeItem("authTokens");
    localStorage.removeItem("establecimientoData")
    navigate("/login");
  };

  const getDataEstablecimiento = async (dataToken, authTokenData) => {

    let idEstablecimiento = dataToken.establecimiento;

    console.log(idEstablecimiento, " ", authTokenData)

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(authTokenData?.token),
    };

    try {
      const response = await axios.get(`${ESTABLECIMIENTO_API}/${idEstablecimiento}`, { headers });
      console.log("operacion exitosa:", response);
      setEstablecimientoData(response.data);
      localStorage.setItem("establecimientoData", JSON.stringify(response.data))
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  }

  const contextValue = useMemo(() => {
    return {
      user,
      establecimientoData,
      loginUser,
      logoutUser,
      authTokens,
    };
  }, [user, authTokens, establecimientoData]);

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading ? null : children}
    </AuthContext.Provider>
  );
};
