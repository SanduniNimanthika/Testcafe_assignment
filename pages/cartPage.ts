import { Selector, t } from "testcafe";
class cartPage {
    checkoutButton: Selector;
    
    constructor() {
      this.checkoutButton = Selector("#checkout.btn btn_action btn_medium checkout_button");
      
    }
   
  }
  
export default new cartPage();