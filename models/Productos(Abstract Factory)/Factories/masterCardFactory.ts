import ProductsFatory from "./ProductsFactory";
import MasterCardGold from "../ConcreteProducts/masterCardGold";
import MasterCardCommon from "../ConcreteProducts/masterCardCommon";

class MasterCardFactory extends ProductsFatory {
        
    get masterCardGold(): MasterCardGold{
        return new MasterCardGold();
    }

    get masterCardCommon(): MasterCardCommon{
        return new MasterCardCommon();
    }
}

export default MasterCardFactory;