import { Router } from "express";
import LoginController from "../controllers/loginControllers";
import LoginCamposObrigatorios from "../middlewares/loginCamposObrigatorios";
import LoginJaExiste from "../middlewares/loginJaExistente";
import { validateNotExistUser, validatePassword } from "../middlewares/loginNaoExitente";

export default class LoginRoutes {
  public init(): Router {
    const routes = Router();

    const controller = new LoginController();

    routes.post("/createLogin", [LoginCamposObrigatorios, LoginJaExiste], controller.store);
    routes.post('/login',[validateNotExistUser, LoginCamposObrigatorios, validatePassword], controller.login);
    routes.get("/login", controller.index);
    return routes;
  }
}
