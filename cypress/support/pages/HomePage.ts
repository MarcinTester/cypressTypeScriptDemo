class HomePage {
  elements = {
    signinButton: () => cy.get(".shop-menu > .nav > :nth-child(4) > a"),
    logoutButton: () => cy.contains("Logout"),
    deleteAccountButton: () => cy.contains("Delete Account"),
    userNameText: () => cy.get("b"),
    productsPage: () => cy.contains("Products"),
  };

  goToProductPage() {
    this.elements.productsPage().click();
  }

  clickLogoutButton() {
    this.elements.logoutButton().click();
  }

  openSignin() {
    this.elements.signinButton().click();
  }

  getLoggedUserName(): Cypress.Chainable<string> {
    return this.elements.userNameText().invoke("text");
  }
}

export default HomePage;
