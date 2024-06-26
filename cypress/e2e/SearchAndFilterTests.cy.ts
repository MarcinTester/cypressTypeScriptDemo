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

  it("Search products", () => {
    homePage.goToProductPage();
    testData.products.forEach(function (product: string) {
      productsPage.clearSearch();
      productsPage.searchProduct(product);
      productsPage.clickSearchProduct();

      productsPage.elements.productCart().should("be.visible");
      productsPage.elements
        .productName()
        .should("be.visible")
        .and("have.text", product);
    });
  });

  it("Filter products", () => {
    homePage.goToProductPage();
    productsPage.clickHmFileter();
    productsPage.checkVisibleProducts(testData.hmProducts);

    productsPage.elements.title().should("have.text", testData.hmTitle);

    productsPage.openWomanCategoryDropdown();
    productsPage.clickWomanCategory();
    productsPage.checkVisibleProducts(testData.womenDressProducts);

    productsPage.elements.title().should("have.text", testData.womenDressTitle);
  });
});
