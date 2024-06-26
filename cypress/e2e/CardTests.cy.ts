import HomePage from "../support/pages/HomePage";
import ProductsPage from "../support/pages/ProductsPage";
import ProductDetailsPage from "../support/pages/ProductDetailsPage";
import CardPage from "../support/pages/CardPage";

describe("Card Tests", () => {
  let testData: any;
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const productDetailsPage = new ProductDetailsPage();
  const cardPage = new CardPage();
  before(function () {
    cy.fixture("testData").then(function (data) {
      testData = data;
    });
  });

  beforeEach(function () {
    cy.visit("/");
  });

  it("Add and remove product from card", () => {
    cy.login(testData.email, testData.password);
    homePage.goToProductPage();
    productsPage.searchProduct(testData.products[0]);
    productsPage.clickSearchProduct();
    productsPage.clickViewProductButton();
    productDetailsPage.clickAddToCardButton();

    productDetailsPage.elements
      .popUpTitle()
      .should("have.text", testData.productAddedPopUpTitle);
    productDetailsPage.elements
      .popUpMessage()
      .should("have.text", testData.productAddedPopUpMessage);

    productDetailsPage.clickViewCardButton();
    cardPage.elements
      .productsDescription()
      .should("contain", testData.products[0]);

    cardPage.elements.productImage().should("be.visible");
    cardPage.clickRemoveButton();

    cardPage.elements.productImage().should("not.exist");
    cardPage.elements.productsDescription().should("not.exist");
  });

  // it.only("Add and remove product from card", () => {
  //   homePage.goToProductPage();
  //   cy.addProduct(testData.products[3])
  // productsPage.elements.productCart().each(($el, index) => {
  //   if ($el.text().includes(testData.products[0])) {
  //     productsPage.elements
  //       .addToCartButton()
  //       .eq(index)
  //       .click({ force: true });
  //     productsPage.clickContinueShoppingButton();
  //   }
  // });
  //  });
});
