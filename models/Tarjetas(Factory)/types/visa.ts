import IPaymentMethod from "../paymentMethodInterface";

class Visa implements IPaymentMethod {
    
    get comission(): number{
        return 0.05;
    }
}

export default Visa;