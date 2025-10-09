/**
 * Given The Application page with no data
 *  When API server is available
 *   Then should display a form to create a new portfolio
 */
describe("Given The Application page with no data", () => {
  context("When API server is available", () => {
    it("Then should display a form to create a new portfolio", () => {
      cy.visit("");
      cy.get("form").should("exist");
    });
  });
});
