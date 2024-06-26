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
