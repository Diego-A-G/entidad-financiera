"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Database {
    constructor() { }
    static initialize() {
        this._database = 'prueba';
        this._user = 'dag';
        this._password = '123';
        this._host = 'localhost';
    }
    static getInstance() {
        if (!this.intance) {
            this.initialize();
            this.intance = new sequelize_1.Sequelize(this._database, this._user, this._password, {
                host: this._host,
                dialect: 'mysql'
                //logging:'false'
            });
        }
        return this.intance;
    }
}
exports.default = Database;
//# sourceMappingURL=connection.js.map