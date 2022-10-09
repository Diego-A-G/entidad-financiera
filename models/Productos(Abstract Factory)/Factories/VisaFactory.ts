import ProductsFatory from "./ProductsFactory";
import VisaCommon from "../ConcreteProducts/VisaCommon";
import VisaGold from "../ConcreteProducts/VisaGold";

class VisaFactory extends ProductsFatory {
        
    get visaGold(): VisaGold{
        return new VisaGold();
    }

    get visaCommon(): VisaCommon{
        return new VisaCommon();
    }
}

export default VisaFactory;