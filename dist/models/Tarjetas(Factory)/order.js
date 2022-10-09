"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paymentMethodFactory_1 = __importDefault(require("./paymentMethodFactory"));
class Order {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
        this.comission = 0;
    }
    create() {
        this.paymentType = paymentMethodFactory_1.default.createPaymentType(this.type);
        this.comission = this.paymentType.comission * this.amount;
    }
}
exports.default = Order;
//# sourceMappingURL=order.js.map