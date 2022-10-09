import Order from "./order";
import enumPaymentType from "./types/enumPaymentType";
import Visa from "./types/visa";
import { expect } from 'chai'


let order1 = new Order(enumPaymentType.Visa, 100),
    order2 = new Order(enumPaymentType.MasterCard, 100),
    order3 = new Order(enumPaymentType.PayPal, 100);

order1.create();
order2.create();
order3.create();

describe(" Orden - Visa ", () =>{
    it("La orden se debe pagar con visa", ()=>{
        expect(true).to.equal(order1.paymentType instanceof Visa);
    });

    it("La comision de la orden es", ()=>{
        expect(true).to.equal(order1.paymentType instanceof Visa);
    });

});
