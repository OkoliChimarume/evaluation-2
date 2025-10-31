/// <reference types="cypress" />
// ***********************************************
// Extend Cypress Chainable interface
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      navigateTo(path: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("navigateTo", (path: string) => {
  cy.visit(path);
  cy.url().should("include", path);
});
