"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('prueba', 'dag', '123', {
    host: 'localhost',
    dialect: 'mysql'
    //logging:'false'
});
exports.default = db;
//# sourceMappingURL=connectwo.js.map