"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var recadosControllers_1 = __importDefault(require("../controllers/recadosControllers"));
var recadoCamposObrigatorios_1 = __importDefault(require("../middlewares/recadoCamposObrigatorios"));
var RecadoRoutes = /** @class */ (function () {
    function RecadoRoutes() {
    }
    RecadoRoutes.prototype.init = function () {
        var routes = express_1.Router();
        var controller = new recadosControllers_1.default();
        routes.post("/recado", [recadoCamposObrigatorios_1.default], controller.store);
        routes.get("/recado", controller.index);
        routes.get("/recado/:id", controller.show);
        routes.delete("/recado/:id", controller.delete);
        routes.put("/recado/:id", [recadoCamposObrigatorios_1.default], controller.update);
        return routes;
    };
    return RecadoRoutes;
}());
exports.default = RecadoRoutes;
