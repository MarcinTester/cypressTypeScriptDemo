
import HomePage from "../support/pages/HomePage";
import LoginPage from "../support/pages/LoginPage";
const homePage = new HomePage();
const loginPage = new LoginPage();

Cypress.Commands.add("createUserName", (): Cypress.Chainable<string> => {
  let result = "";
  for (let i = 0; i < 5; i++) {
    result += Math.floor(Math.random() * 10);
  }
  result = String(result);
  console.log("result " + result);
  return cy.wrap(result);
});

Cypress.Commands.add("login", (email:string, password:string) => {
  homePage.openSignin();
  loginPage.provideEmail(email);
  loginPage.providePassword(password);
  loginPage.clickLogIn();
});