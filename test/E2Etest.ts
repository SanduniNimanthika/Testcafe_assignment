import 'testcafe';
import { ClientFunction, Selector } from "testcafe";
import cartPage from '../pages/cartPage';
import homePage from "../pages/homePage";
import LoginPage from '../pages/LoginPage';
import overview from '../pages/overview';
import productdetailPage from '../pages/productdetailPage';
import yourinformationPage from '../pages/yourinformationPage';
const getURL = ClientFunction(()=>window.location.href)

fixture`Group of tests / Test suite - Login Suite`.page`./`;

test("Valid login", async (t) => {
    LoginPage.login("performance_glitch_user", "secret_sauce");
    await t.expect(Selector("span.title").innerText).eql("PRODUCTS");

  });
test("product details", async (t) => {
  await t
    .click(homePage.productName)
    .expect(productdetailPage.productPrice.exists).ok()
    .click(productdetailPage.backbutton)
    await t .expect(Selector("span.title").innerText).eql("PRODUCTS");
  });

test ("add to cart", async (t)=>{
    await t 
    .click(homePage.addtoCartproduct1)
    .click(homePage.addtoCartproduct2)
    .click(homePage.addtoCart)
    .expect(getURL()).contains('cart');
    
  });
  
  test ("checkout", async (t)=>{
    await t 
    .click(cartPage.checkoutButton)
    .expect(getURL()).contains('checkout-step-one');

  });

  test("personal info", async (t) => {
    yourinformationPage.info("sanduni","niman","id1553");
    await t
    .expect(getURL()).contains('checkout-step-two')
    .click(overview.finishButton)
    .expect(getURL()).contains('checkout-complete');


  });







  
  

