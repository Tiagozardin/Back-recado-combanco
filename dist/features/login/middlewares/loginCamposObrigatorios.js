"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LoginCamposObrigatorios(req, res, next) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (!email) {
        return res.status(400).json({
            msg: "O email dever ser informado",
        });
    }
    if (email.trim().length < 3) {
        return res.status(400).json({
            msg: "O nome deve conter ao menos 3 caracteres",
        });
    }
    if (!password) {
        return res.status(400).json({
            msg: "Password deve ser informado"
        });
    }
    next();
}
exports.default = LoginCamposObrigatorios;
