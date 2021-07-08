import { Router } from "express";
import LoginController from "../controllers/loginControllers";
import LoginCamposObrigatorios from "../middlewares/loginCamposObrigatorios";
import LoginJaExiste from "../middlewares/loginJaExistente";
import LoginNaoExiste from "../middlewares/loginNaoExitente";

export default class LoginRoutes {
  public init(): Router {
    const routes = Router();

    const controller = new LoginController();

    routes.post("/login", [LoginCamposObrigatorios, LoginJaExiste], controller.store);
    routes.get("/login", controller.index);
    routes.get("/login/:id", controller.show);
    routes.put("/login/:id",[LoginCamposObrigatorios, LoginNaoExiste], controller.update);
    return routes;
  }
}
