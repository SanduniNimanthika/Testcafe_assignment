import 'testcafe';
import { Selector } from "testcafe";
import LoginPage from "../pages/LoginPage";
fixture`Group of tests / Test suite - Login Suite`.page`./`;

test("Valid login", async (t) => {
  LoginPage.login("performance_glitch_user", "secret_sauce");
  await t.expect(Selector("span.title").innerText).eql("PRODUCTS");
});


