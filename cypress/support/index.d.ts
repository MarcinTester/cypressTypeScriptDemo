export {};
declare global {
  namespace Cypress {
    interface Chainable {
      createUserName(): Chainable<string>;
      login(email: string, password: string): Chainable<void>;
      addProduct(product: string): Chainable<void>;
      createPassword(): Chainable<string>;
    }
  }
}
