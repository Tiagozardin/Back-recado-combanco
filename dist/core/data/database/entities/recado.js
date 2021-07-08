"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recado = void 0;
var typeorm_1 = require("typeorm");
var loginRoutes_1 = __importDefault(require("../../../../features/login/routes/loginRoutes"));
var login_1 = require("./login");
var Recado = /** @class */ (function (_super) {
    __extends(Recado, _super);
    function Recado(titulo, descricao, loginID) {
        var _this = _super.call(this) || this;
        _this.titulo = titulo;
        _this.descricao = descricao;
        _this.loginID = loginID;
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Recado.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ name: "id_login" }),
        __metadata("design:type", Number)
    ], Recado.prototype, "loginID", void 0);
    __decorate([
        typeorm_1.Column({ name: 'titulo' }),
        __metadata("design:type", String)
    ], Recado.prototype, "titulo", void 0);
    __decorate([
        typeorm_1.Column({ name: 'descricao' }),
        __metadata("design:type", String)
    ], Recado.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return login_1.Login; }, function (login) { return login; }),
        typeorm_1.JoinColumn({ name: "id_login", referencedColumnName: "id" }),
        __metadata("design:type", loginRoutes_1.default)
    ], Recado.prototype, "login", void 0);
    Recado = __decorate([
        typeorm_1.Entity({ name: "recados" }),
        __metadata("design:paramtypes", [String, String, Number])
    ], Recado);
    return Recado;
}(typeorm_1.BaseEntity));
exports.Recado = Recado;
