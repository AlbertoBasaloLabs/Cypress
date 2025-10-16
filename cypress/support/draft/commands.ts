import {
  createPortfolio,
  deleteAllPortfolios,
} from "./draft/portfolios.command";

declare global {
  namespace Cypress {
    interface Chainable {
      deleteAllPortfolios(): Chainable<void>;
      createPortfolio(cash: number, name: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add("deleteAllPortfolios", deleteAllPortfolios);
Cypress.Commands.add("createPortfolio", createPortfolio);
