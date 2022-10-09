import IPaymentMethod from "../paymentMethodInterface";

class MasterCard implements IPaymentMethod {
    
    get comission(): number{
        return 0.04;
    }
}

export default MasterCard;