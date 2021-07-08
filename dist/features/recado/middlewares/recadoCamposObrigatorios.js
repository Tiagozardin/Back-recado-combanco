"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RecadoCamposObrigatorios(req, res, next) {
    var _a = req.body, titulo = _a.titulo, detalhes = _a.detalhes;
    if (!titulo) {
        return res.status(400).json({
            msg: "O titulo dever ser informado",
        });
    }
    if (titulo.trim().length < 3) {
        return res.status(400).json({
            msg: "O titulo deve conter ao menos 3 caracteres",
        });
    }
    if (!detalhes) {
        return res.status(400).json({
            msg: "Detalhes deve ser informado"
        });
    }
    next();
}
exports.default = RecadoCamposObrigatorios;
