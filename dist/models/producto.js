"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Producto = connection_1.default.getInstance().define('Producto', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT
    },
    peso: {
        type: sequelize_1.DataTypes.FLOAT
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT
    },
    imagen: {
        type: sequelize_1.DataTypes.TEXT
    },
    categoria: {
        type: sequelize_1.DataTypes.INTEGER
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Producto;
//# sourceMappingURL=producto.js.map