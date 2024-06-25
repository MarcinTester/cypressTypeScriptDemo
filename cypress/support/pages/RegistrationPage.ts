class RegistrationPage {
  elements = {
    loginPassword: () => cy.get('[data-qa="login-password"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    passwordTextField: () => cy.get('[type="password"]'),
    firstNameTextField: () => cy.get('[data-qa="first_name"]'),
    lastNameTextField: () => cy.get('[data-qa="last_name"]'),
    addressTextField: () => cy.get('[data-qa="address"]'),
    stateTestField: () => cy.get('[data-qa="state"]'),
    cityTextField: () => cy.get('[data-qa="city"]'),
    zipcodeTextField: () => cy.get('[data-qa="zipcode"]'),
    phoneNumberTextField: () => cy.get("#mobile_number"),
    createAccountButton: () => cy.get('[data-qa="create-account"]'),
    accountCreatedText: () => cy.get('[data-qa="account-created"]'),
    radioButton: () => cy.get('[type="radio"]'),
    accountCreatedMessage: () => cy.get('[data-qa="account-created"]'),
    companyTestField: () => cy.get('[data-qa="company"]'),
    caountryDropDown: () => cy.get('[data-qa="country"]'),
    continueButton: () => cy.get('[data-qa="continue-button"]'),
  };

  clickContinue() {
    this.elements.continueButton().click()
  }

  selectCountry(country: string) {
    this.elements.caountryDropDown().select(country);
  }

  proviceCompany(company: string) {
    this.elements.companyTestField().type(company);
  }

  providePassword(password: string) {
    this.elements.passwordTextField().type(password);
  }

  provideFirstName(firstName: string) {
    this.elements.firstNameTextField().type(firstName);
  }

  provideLastName(lastName: string) {
    this.elements.lastNameTextField().type(lastName);
  }

  provideAddress(address: string) {
    this.elements.addressTextField().type(address);
  }

  provideState(state: string) {
    this.elements.stateTestField().type(state);
  }

  provideZipCode(zipCode: string) {
    this.elements.zipcodeTextField().type(zipCode);
  }

  provideCity(zipCode: string) {
    this.elements.cityTextField().type(zipCode);
  }

  providePhoneNumber(phoneNumber: string) {
    this.elements.phoneNumberTextField().type(phoneNumber);
  }

  clickCreateAccount() {
    this.elements.createAccountButton().click();
  }
}

export default RegistrationPage;
