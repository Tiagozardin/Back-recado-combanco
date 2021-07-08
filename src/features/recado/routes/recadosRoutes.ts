import { Router } from "express";
import RecadoController from "../controllers/recadosControllers";
import RecadoCamposObrigatorios from "../middlewares/recadoCamposObrigatorios";

export default class RecadoRoutes {
  public init(): Router {
    const routes = Router();

    const controller = new RecadoController();

    routes.post("/recado",[RecadoCamposObrigatorios], controller.store);
    routes.get("/recado", controller.index);
    routes.get("/recado/:id", controller.show);
    routes.delete("/recado/:id", controller.delete);
    routes.put("/recado/:id" ,[RecadoCamposObrigatorios], controller.update);
    return routes;
  }
}