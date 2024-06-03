export const seguridadPaths = [
  {
    id: 1,
    name: "login",
    path: "/login",
    unionPath: "login/",
    alias: "INICIAR SESIÓN",
  },
  {
    id: 2,
    name: "restore-password",
    path: "/restore-password",
    unionPath: "restore-password/",
    alias: "RESTABLECER CONTRASEÑA",
  },
  {
    id: 3,
    name: "update-password",
    path: "/update-password/:id",
    unionPath: "update-password/:id",
    alias: "ACTUALIZAR CONTRASEÑA",
  },
];
