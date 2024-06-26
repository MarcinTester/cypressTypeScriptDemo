import HomePage from "../support/pages/HomePage";
import ProductsPage from "../support/pages/ProductsPage";

describe("Login and registration tests", () => {
  let testData: any;
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  before(function () {
    cy.fixture("testData").then(function (data) {
      testData = data;
    });
  });

  beforeEach(function () {
    cy.visit("/");
  });

  it("Search product", () => {
    homePage.goToProductPage();
    productsPage.searchProduct(testData.products[0]);
    productsPage.clickSearchProduct();

    productsPage.elements
      .productName()
      .should("be.visible")
      .and("have.text", testData.products[0]);

    productsPage.elements.productName().should("be.visible");
  });

  it("Filter products", () => {
    homePage.goToProductPage();
    productsPage.clickHmFileter();
    productsPage.elements.title().should("have.text", testData.hmTitle);

    testData.hmProducts.forEach(function (product: string) {
      productsPage.elements
        .productCart()
        .contains(product)
        .should("be.visible")
        .and("have.text", product);
    });
    productsPage.openWomanCategoryDropdown();
    productsPage.clickWomanCategory();

    productsPage.elements.title().should("have.text", testData.womenDressTitle);

    testData.womenDressProducts.forEach(function (product: string) {
      productsPage.elements
        .productCart()
        .contains(product)
        .should("be.visible")
        .and("have.text", product);
    });
  });
});
