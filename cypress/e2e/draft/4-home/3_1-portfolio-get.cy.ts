/**
 * Given the Portfolio Home page
 *  Then should call the portfolios get endpoint
 *  When create a new portfolio
 *   Then should call the portfolios post endpoint
 */
describe("Given the Portfolio Home page", () => {
  beforeEach(() => {});
  it("Then should call the portfolios get endpoint", () => {
    const API_URL = Cypress.env("API_URL");
    cy.intercept("GET", `${API_URL}portfolios`).as("getPortfolios");
    cy.visit("");
    cy.wait("@getPortfolios")
      .its("response")
      .its("statusCode")
      .should("be.lessThan", 400);
  });
  it("Then should call the portfolios get endpoint", () => {
    const API_URL = Cypress.env("API_URL");
    cy.intercept("GET", `${API_URL}portfolios`).as("getPortfolios");
    cy.visit("");
    cy.wait("@getPortfolios").its("request").its("body").should("be.empty");
  });
});
