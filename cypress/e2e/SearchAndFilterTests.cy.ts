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

  it("Login and logout User", () => {
    homePage.goToProductPage();
    productsPage.searchProduct(testData.product[0]);
    productsPage.clickSearchProduct();

    productsPage.elements
      .productName()
      .should("be.visible")
      .and("have.text", testData.product[0]);

    productsPage.elements.productName().should("be.visible");
  });
  
  it("Filter products", () => {
    homePage.goToProductPage();
    productsPage.searchProduct(testData.product[0]);
    productsPage.clickSearchProduct();

    productsPage.elements
      .productName()
      .should("not.be.visible")
      .and("have.text", testData.product[0]);

  })
});
