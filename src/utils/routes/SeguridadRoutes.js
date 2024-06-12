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
  {
    id: 4,
    name: "lista-usuarios",
    path: "/lista-usuarios",
    unionPath:"lista-usuarios/",
    alias: "LISTA DE USUARIOS",
  },
  {
    id:5,
    name: "create-user",
    path: "/create-user",
    unionPath: "create-user/",
    alias: "CREAR USUARIO",
  },
  {
    id: 6,
    name: "info-user",
    path: "/info-user/:id",
    unionPath: "info-user/:id",
    alias: "INFORMACIÓN DEL USUARIO",
  },
  
];
