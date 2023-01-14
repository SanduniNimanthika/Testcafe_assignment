import { Selector, t } from "testcafe";


class homePage {
  productPrice: Selector;
    productName: Selector;
    addtoCartproduct1: Selector;
    addtoCartproduct2: Selector;
    addtoCart: Selector;
  constructor() {
    this.productName = Selector("a").withText("Sauce Labs Bike Light");
    this.addtoCart = Selector(".shopping_cart_container");
    this.addtoCartproduct1= Selector("#add-to-cart-sauce-labs-bike-light.btn btn_primary btn_small btn_inventory");
    this.addtoCartproduct2 = Selector("#add-to-cart-sauce-labs-backpack.btn btn_primary btn_small btn_inventory");
  
  }
 
}

export default new homePage();