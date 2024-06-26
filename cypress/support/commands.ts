import HomePage from "../support/pages/HomePage";
import LoginPage from "../support/pages/LoginPage";
import ProductsPage from "../support/pages/ProductsPage";
const homePage = new HomePage();
const loginPage = new LoginPage();
const productsPage = new ProductsPage();

declare global {
  namespace Cypress {
    interface Chainable {
      createUserName(): Chainable<string>;
      createPassword(): Chainable<string>;
      login(email: string, password: string): Chainable<void>;
      addProduct(product: string): Chainable<void>;
    }
  }
}
Cypress.Commands.add("createUserName", (): Cypress.Chainable<string> => {
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += Math.floor(Math.random() * 10);
  }
  result = String(result);
  console.log("result " + result);
  return cy.wrap(result);
});

Cypress.Commands.add("createPassword", (): Cypress.Chainable<string> => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const length = 8; 
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log("Generated password: " + result);
  return cy.wrap(result);
});

Cypress.Commands.add("login", (email: string, password: string) => {
  homePage.openSignin();
  loginPage.provideEmail(email);
  loginPage.providePassword(password);
  loginPage.clickLogIn();
});

Cypress.Commands.add("addProduct", (product: string) => {
  productsPage.elements.productCart().each(($el, index) => {
    if ($el.text().includes(product)) {
      productsPage.elements.addToCartButton().eq(index).click({ force: true });
      productsPage.clickContinueShoppingButton();
    }
  });
});
