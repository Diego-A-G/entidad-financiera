import IPaymentMethod from "../paymentMethodInterface";

class PayPal implements IPaymentMethod {
    
    get comission(): number{
        return 0.06;
    }
}

export default PayPal;