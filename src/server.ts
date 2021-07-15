import cors from "cors";
import express from "express";

import Database from "./core/data/connections/Database";
import LoginRoutes from "./features/login/routes/loginRoutes";
import RecadoRoutes from "./features/recado/routes/recadosRoutes";

const app = express();
// Receber json no corpo da Requisição
app.use(express.json());
app.use(cors());

// Vincular as rotas
const loginRoutes = new LoginRoutes().init();
const recadoRoutes = new RecadoRoutes().init();
app.use(loginRoutes, recadoRoutes);

const init = async () => {
  await new Database().openConnection();
  app.listen(process.env.PORT || 3000, () => {
    console.log("Rodando");
  });
};

init();
