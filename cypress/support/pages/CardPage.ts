class CardPage {
  elements = {
    productsDescription: () => cy.get(".cart_description"),
    productImage: () => cy.get(".product_image"),
    removeButton: () => cy.get(".cart_quantity_delete"),
  };

  clickRemoveButton() {
    this.elements.removeButton().click();
  }
}

export default CardPage;
