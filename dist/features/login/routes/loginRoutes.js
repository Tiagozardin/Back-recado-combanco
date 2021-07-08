"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loginControllers_1 = __importDefault(require("../controllers/loginControllers"));
var loginCamposObrigatorios_1 = __importDefault(require("../middlewares/loginCamposObrigatorios"));
var loginJaExistente_1 = __importDefault(require("../middlewares/loginJaExistente"));
var loginNaoExitente_1 = __importDefault(require("../middlewares/loginNaoExitente"));
var LoginRoutes = /** @class */ (function () {
    function LoginRoutes() {
    }
    LoginRoutes.prototype.init = function () {
        var routes = express_1.Router();
        var controller = new loginControllers_1.default();
        routes.post("/login", [loginCamposObrigatorios_1.default, loginJaExistente_1.default], controller.store);
        routes.get("/login", controller.index);
        routes.get("/login/:id", controller.show);
        routes.put("/login/:id", [loginCamposObrigatorios_1.default, loginNaoExitente_1.default], controller.update);
        return routes;
    };
    return LoginRoutes;
}());
exports.default = LoginRoutes;
