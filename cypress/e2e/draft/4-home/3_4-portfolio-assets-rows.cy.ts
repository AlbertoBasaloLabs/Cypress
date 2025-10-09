// Example of fixtures

/**
 * Given the Portfolio Home page
 *   When got a portfolio with 2 assets
 *    Then should display the table with the assets
 */
describe("Given the Portfolio Home page", () => {
  context("When got a portfolio with 2 assets", () => {
    it("should display the summary with the total assets value", () => {
      cy.fixture("portfolio").then((stubbedPortfolio) => {
        const rows = stubbedPortfolio[0].assets.length;
        const API_URL = Cypress.env("API_URL");
        cy.intercept("GET", `${API_URL}portfolios`, stubbedPortfolio)
          .as("getPortfolios")
          .should("be.calledOnce");
        cy.visit("");
        cy.wait("@getPortfolios");
        cy.get("article").find("table").as("assetsTable");
        cy.get("@assetsTable")
          .find("tbody")
          .find("tr")
          .should("have.length", rows);
        cy.get("@assetsTable")
          .find("tfoot")
          .find("tr")
          .should("have.length", 1);
      });
    });
  });
});
