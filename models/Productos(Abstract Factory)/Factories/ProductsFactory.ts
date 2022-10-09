import ProductType from "../Types/enumProductType";
import MasterCardFactory from "./masterCardFactory";
import VisaFactory from "./VisaFactory";
import PaypalFactory from "./PaypalFactory";


class ProductsFactory{

    public static createProduct(type: ProductType){
        if(type === ProductType.MasterCard){
            return new MasterCardFactory();
        }
        if(type === ProductType.Visa){
            return new VisaFactory();
        }
        if(type === ProductType.PayPal){
            return new PaypalFactory();
        }
         throw new Error("Invalid payment method type")
    }

}

export default ProductsFactory;