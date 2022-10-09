import IPaymentMethod from "./paymentMethodInterface";
import PaymentType from "./types/enumPaymentType";
import MasterCard from "./types/masterCard";
import PayPal from "./types/payPal";
import Visa from "./types/visa";


class PaymentMethodFactory{

    public static createPaymentType(type: PaymentType): IPaymentMethod{
        if(type === PaymentType.MasterCard){
            return new MasterCard();
        }
        if(type === PaymentType.Visa){
            return new Visa();
        }
        if(type === PaymentType.PayPal){
            return new PayPal();
        }
         throw new Error("Invalid payment method type")
    }

}

export default PaymentMethodFactory;