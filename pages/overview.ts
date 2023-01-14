import { Selector, t } from "testcafe";
class overviewPage {
    finishButton: Selector;
    
    constructor() {
      this.finishButton = Selector("#finish.btn btn_action btn_medium cart_button");
        
    }
   
  }
  
export default new overviewPage();