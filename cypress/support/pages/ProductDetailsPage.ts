class ProductDetailsPage {
  elements = {
    addToCardButton: () => cy.contains("Add to cart"),
    searchButton: () => cy.get("#submit_search"),
    popUpTitle: () => cy.get(".modal-title"),
    popUpMessage: () => cy.get(".modal-body > :nth-child(1)"),
    viewCardButton: () => cy.get("u"),
    productName: () => cy.get(".productinfo > p"),
  };

  clickAddToCardButton() {
    this.elements.addToCardButton().click()
  }

  clickViewCardButton() {
    this.elements.viewCardButton().click()
  }
}

export default ProductDetailsPage;
