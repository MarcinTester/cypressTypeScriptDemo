class ProductsPage {
  elements = {
    searchProductTextField: () => cy.get("#search_product"),
    searchButton: () => cy.get("#submit_search"),
    viewProductButton: () => cy.contains("View Product"),
    hmFileter: () => cy.contains("H&M"),
    productName: () => cy.get(".productinfo > p"),
    productImage: () => cy.get(".productinfo > img"),
    title: () => cy.get(".title"),
    productCart: () => cy.get("[class='single-products']"),
    dropdownWomanCategory: () => cy.get("[href='#Women']"),
    WomanCategory: () => cy.get("#Women > .panel-body > ul > :nth-child(1) > a"),
    //addToCartButton: () => cy.contains("Add to cart"),
    addToCartButton: () => cy.get(".productinfo > .btn"),
    continueShoppingButton: () => cy.get("[data-dismiss='modal']"),

  };
  
  clickContinueShoppingButton() {
    this.elements.continueShoppingButton().click()
  }

  clickWomanCategory() {
    this.elements.WomanCategory().click()
  }

  openWomanCategoryDropdown() {
    this.elements.dropdownWomanCategory().click()
  }

  clickHmFileter() {
    this.elements.hmFileter().click()
  }
  
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
