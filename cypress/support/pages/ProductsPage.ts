class ProductsPage {
  elements = {
    searchProductTextField: () => cy.get("#search_product"),
    searchButton: () => cy.get("#submit_search"),
    viewProductButton: () => cy.contains("View Product"),
    productName: () => cy.get(".productinfo > p"),
    productImage: () => cy.get(".productinfo > img"),
  };
  
  clickViewProductButton() {
    this.elements.viewProductButton().click()
  }

  searchProduct(product: string) {
    this.elements.searchProductTextField().type(product)
  }

  clickSearchProduct() {
    this.elements.searchButton().click()
  }
}

export default ProductsPage;
