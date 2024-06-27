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
    mrCheckbox: () => cy.get("#id_gender1"),
    dayDropdown: () => cy.get('[data-qa="days"]'),
    monthDropdown: () => cy.get('[data-qa="months"]'),
    yearDropdown: () => cy.get('[data-qa="years"]'),
    newsletterCheckbox: () => cy.get("#newsletter"),
    specialOffersCheckbox: () => cy.get("#optin"),
  };

  checkSpecialOffers() {
    this.elements.specialOffersCheckbox().check();
  }

  checkNewsletter() {
    this.elements.newsletterCheckbox().check();
  }

  selectYear(year: string) {
    this.elements.yearDropdown().select(year);
  }

  selectMonth(month: string) {
    this.elements.monthDropdown().select(month);
  }

  selectDay(day: string) {
    this.elements.dayDropdown().select(day);
  }

  clickMrCheckbox() {
    this.elements.mrCheckbox().click();
  }

  clickContinue() {
    this.elements.continueButton().click();
  }

  selectCountry(country: string) {
    this.elements
      .caountryDropDown()
      .select(country)
      .should("have.value", country);
  }

  proviceCompany(company: string) {
    this.elements
      .companyTestField()
      .type(company)
      .should("have.value", company);
  }

  providePassword(password: string) {
    this.elements
      .passwordTextField()
      .type(password)
      .should("have.value", password);
  }

  provideUniquePassword() {
    cy.createPassword().then((result) => {
      cy.log("password: " + result);
      this.providePassword(result);
    });
  }

  provideFirstName(firstName: string) {
    this.elements
      .firstNameTextField()
      .type(firstName)
      .should("have.value", firstName);
  }

  provideLastName(lastName: string) {
    this.elements
      .lastNameTextField()
      .type(lastName)
      .should("have.value", lastName);
  }

  provideAddress(address: string) {
    this.elements
      .addressTextField()
      .type(address)
      .should("have.value", address);
  }

  provideState(state: string) {
    this.elements.stateTestField().type(state).should("have.value", state);
  }

  provideZipCode(zipCode: string) {
    this.elements
      .zipcodeTextField()
      .type(zipCode)
      .should("have.value", zipCode);
  }

  provideCity(zipCode: string) {
    this.elements.cityTextField().type(zipCode).should("have.value", zipCode);
  }

  providePhoneNumber(phoneNumber: string) {
    this.elements
      .phoneNumberTextField()
      .type(phoneNumber)
      .should("have.value", phoneNumber);
  }

  clickCreateAccount() {
    this.elements.createAccountButton().click();
  }
}

export default RegistrationPage;
