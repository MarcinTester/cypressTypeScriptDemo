import HomePage from "../support/pages/HomePage";
import LoginPage from "../support/pages/LoginPage";
import RegistrationPage from "../support/pages/RegistrationPage";

describe("Login and registration tests", () => {
  let testData: any;
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registrationPage = new RegistrationPage();

  before(function () {
    cy.fixture("testData").then(function (data) {
      testData = data;
    });
  });

  beforeEach(function () {
    cy.visit("/");
  });

  it("Login and logout User", () => {
    cy.login(testData.email, testData.password);

    homePage.elements.logoutButton().should("be.visible");
    homePage.elements.deleteAccountButton().should("be.visible");

    homePage.clickLogoutButton();
    homePage.elements.signinButton().should("be.visible");
    homePage.elements.logoutButton().should("not.exist");
    homePage.elements.deleteAccountButton().should("not.exist");
  });

  it("Register new user", () => {
    homePage.openSignin();
    loginPage.provideNewUser();
    loginPage.clickSignUp();
    registrationPage.providePassword(testData.password);
    registrationPage.provideFirstName(testData.firstName);
    registrationPage.provideLastName(testData.lastName);
    registrationPage.proviceCompany(testData.company);
    registrationPage.provideAddress(testData.address);
    registrationPage.selectCountry(testData.country[1]);
    registrationPage.provideState(testData.state);
    registrationPage.provideZipCode(testData.zipCode);
    registrationPage.provideCity(testData.city);
    registrationPage.providePhoneNumber(testData.phoneNumber);
    registrationPage.clickCreateAccount();

    registrationPage.elements
      .accountCreatedMessage()
      .should("have.text", testData.accountCreatedHeader);

    registrationPage.clickContinue();

    homePage.elements.logoutButton().should("be.visible");
    homePage.elements.deleteAccountButton().should("be.visible");

    homePage.getLoggedUserName().then((newUser: string) => {
      cy.log(newUser);
      homePage.clickLogoutButton();
      cy.login(newUser + "@gmial.com", testData.password);
    });

    homePage.elements.logoutButton().should("be.visible");
    homePage.elements.deleteAccountButton().should("be.visible");
  });
});
