"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enumPaymentType_1 = __importDefault(require("./types/enumPaymentType"));
const masterCard_1 = __importDefault(require("./types/masterCard"));
const payPal_1 = __importDefault(require("./types/payPal"));
const visa_1 = __importDefault(require("./types/visa"));
class PaymentMethodFactory {
    static createPaymentType(type) {
        if (type === enumPaymentType_1.default.MasterCard) {
            return new masterCard_1.default();
        }
        if (type === enumPaymentType_1.default.Visa) {
            return new visa_1.default();
        }
        if (type === enumPaymentType_1.default.PayPal) {
            return new payPal_1.default();
        }
        throw new Error("Invalid payment method type");
    }
}
exports.default = PaymentMethodFactory;
//# sourceMappingURL=paymentMethodFactory.js.map