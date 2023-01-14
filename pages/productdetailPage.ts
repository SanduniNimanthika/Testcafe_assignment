import { Selector, t } from "testcafe";

class productdetailPage {
  productPrice: Selector;
  backbutton: Selector;
  
  constructor() {
    this.productPrice = Selector("inventory_item_price").withText("$49.99");
    this.backbutton = Selector("#back-to-products");
    
    }
    
}

export default new productdetailPage();