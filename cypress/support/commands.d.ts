
declare namespace Cypress {
    interface Chainable<Subject = any> {
      createUserName(): Chainable<string>;
      createPassword(): Chainable<string>;
      login(email: string, password: string): Chainable<void>;
      addProduct(product: string): Chainable<void>;
    }
  }