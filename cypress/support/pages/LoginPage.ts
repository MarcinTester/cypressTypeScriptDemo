class LoginPage {
  elements = {
    username: () => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
    emailTextField: () => cy.get('[data-qa="login-email"]'),
    passwordTextField: () => cy.get('[data-qa="login-password"]'),
    nameTextField: () => cy.get('[data-qa="signup-name"]'),
    provideSignUpEmail: () => cy.get('[data-qa="signup-email"]'),
    signUpButton: () => cy.get('[data-qa="signup-button"]'),
    loginButton: () => cy.get('[data-qa="login-button"]'),
    password: () => cy.get('[type="password"]'),
    firstName: () => cy.get('[data-qa="first_name"]'),
    lastName: () => cy.get('[data-qa="last_name"]'),
    address: () => cy.get('[data-qa="address"]'),
    state: () => cy.get('[data-qa="state"]'),
    city: () => cy.get('[data-qa="city"]'),
  };

  clickLogIn() {
    this.elements.loginButton().click()
  }

  clickSignUp() {
    this.elements.signUpButton().click()
  }

  provideEmail(email: string) {
    this.elements.emailTextField().type(email)
  }

  providePassword(password: string) {
    this.elements.passwordTextField().type(password)
  }

  provideName(name: string) {
    this.elements.nameTextField().type(name)
  }

  provideNewUser() {
    cy.createUserName().then((result) => {
      console.log(result);
      this.provideName(result)
      this.provideSignUpEmail(result + "@gmial.com");
    });
  
  }

  provideSignUpEmail(email: string) {
    this.elements.provideSignUpEmail().type(email)
  }
}

export default LoginPage

