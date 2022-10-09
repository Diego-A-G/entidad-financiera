"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const enumPaymentType_1 = __importDefault(require("./types/enumPaymentType"));
const visa_1 = __importDefault(require("./types/visa"));
const chai_1 = require("chai");
let order1 = new order_1.default(enumPaymentType_1.default.Visa, 100), order2 = new order_1.default(enumPaymentType_1.default.MasterCard, 100), order3 = new order_1.default(enumPaymentType_1.default.PayPal, 100);
order1.create();
order2.create();
order3.create();
describe(" Orden - Visa ", () => {
    it("La orden se debe pagar con visa", () => {
        (0, chai_1.expect)(true).to.equal(order1.paymentType instanceof visa_1.default);
    });
    it("La comision de la orden es", () => {
        (0, chai_1.expect)(true).to.equal(order1.paymentType instanceof visa_1.default);
    });
});
//# sourceMappingURL=Test.js.map