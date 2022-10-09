import PaypalCommon from "../ConcreteProducts/paypalCommon";
import PaypalGold from "../ConcreteProducts/paypalGold";
import ProductsFatory from "./ProductsFactory";

class PaypalFactory extends ProductsFatory {
        
    get visaGold(): PaypalGold{
        return new PaypalGold();
    }

    get visaCommon(): PaypalCommon{
        return new PaypalCommon();
    }
}

export default PaypalFactory;