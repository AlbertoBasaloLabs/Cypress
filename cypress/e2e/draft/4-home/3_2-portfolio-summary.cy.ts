import { stubbedPortfolios } from "../../support/stubbs";

describe("Given the portfolio home", () => {
  context("When there is a portfolio", () => {
    it("Then should display the cash", () => {
      const API_URL = Cypress.env("API_URL");
      cy.intercept("GET", `${API_URL}portfolios`, stubbedPortfolios);
      cy.visit("");
      cy.get("article").find("dd").first().contains("$20,000.00");
    });
  });
});
