

import { Selector, t } from "testcafe";

class LoginPage {
  usernameInput: Selector;
  passwordInput: Selector;
  loginButton: Selector;
  constructor() {
    this.usernameInput = Selector("#user-name");
    this.passwordInput = Selector(`input[placeholder="Password"]`);
    this.loginButton = Selector("#login-button");
  }

  async login(username, password) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginButton);
  }
}

export default new LoginPage();