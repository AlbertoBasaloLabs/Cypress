// Example of fixtures

/**
 * Given the Portfolio Home page
 *   When got a portfolio with 2 assets
 *    Then should display the table with the assets
 */
describe("Given the Portfolio Home page", () => {
  context("When got a portfolio with 2 assets", () => {
    it("should display the summary with the total assets value", () => {
      const apiUrl = Cypress.env("API_URL");
      cy.intercept("GET", `${apiUrl}/portfolios`, {
        fixture: "portfolio.json",
      });
      cy.visit("/");
      cy.get("table").find("tbody tr").should("have.length", 2);
    });
  });
});
