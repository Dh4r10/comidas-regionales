import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { LOGIN_TOKEN_API } from "../api/SeguridadAPI";
import { toast } from "react-toastify";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.stringify(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  console.log(user);
  const loginUser = (values) => {
    const { username, password } = values;

    axios
      .post(
        LOGIN_TOKEN_API,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        setAuthTokens(response.data);
        console.log(response);
        localStorage.setItem("authTokens", response.data.token);
        setUser(jwtDecode(response.data.token));
        navigate("/");
        console.log(response);
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
    navigate("/login");
  };

  const contextValue = useMemo(() => {
    return {
      user,
      loginUser,
      logoutUser,
      authTokens,
    };
  }, [user, authTokens]);

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading ? null : children}
    </AuthContext.Provider>
  );
};
