import { Selector, t } from "testcafe";

class yourinformationPage {
    firstnameInput: Selector;
    lastnameInput: Selector;
    unicode: Selector;
    continueButton: Selector;

  constructor() {
    this.firstnameInput = Selector("#first-name");
    this.lastnameInput = Selector("#last-name");
    this.unicode =Selector("#postal-code");
    this.continueButton = Selector("#continue");
  }

  async info(firstname, lastname,unicode) {
    await t
      .typeText(this.firstnameInput, firstname)
      .typeText(this.lastnameInput, lastname)
      .typeText(this.unicode,unicode)
      .click(this.continueButton);
  }
}

export default new yourinformationPage();