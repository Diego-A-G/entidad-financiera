import PaymentMethodFactory from "./paymentMethodFactory";
import IPaymentMethod from "./paymentMethodInterface";
import PaymentType from "./types/enumPaymentType";


class Order {
    public paymentType?: IPaymentMethod;
    public comission: number = 0;

    constructor(
        private type: PaymentType,
        public amount: number){
    }

    public create(): void{
        this.paymentType = PaymentMethodFactory.createPaymentType(this.type)
        this.comission = this.paymentType.comission * this.amount;    
    }
}

export default Order;
