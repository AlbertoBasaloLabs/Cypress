/**
 * Given the create portfolio form
 *  When the form is filled and submitted
 *   Then should display a the portfolio summary
 */
describe("Given the create portfolio form", () => {
  context("When the form is filled and submitted", () => {
    beforeEach(() => {
      //const API_URL = Cypress.env("API_URL");
      //cy.request("DELETE", `${API_URL}portfolios`);
      cy.deleteAllPortfolios();
      cy.visit("");
    });
    it("Then should display a the portfolio summary", () => {
      //cy.get("[name='initial_cash']").clear().type("6547");
      //cy.get("button").contains("Create").click();
      cy.createPortfolio(6547, "Test Portfolio");
      cy.get("dl > :nth-child(2)").contains("$6,547.00");
    });
  });
});
