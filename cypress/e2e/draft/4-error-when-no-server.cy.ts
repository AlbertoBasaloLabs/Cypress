/**
 * Given The Application home page
 *  When no API server is available
 *   Then should display an error message,
 *    And not a busy message
 *    And not the data
 */
describe.skip("Given The Application home page", () => {
  context("When no API server is available", () => {
    it("Then should display an error message, And not a busy message, And not the data", () => {
      cy.visit("");
      cy.get("[aria-invalid='true']").should("exist");
      cy.get("[aria-busy='true']").should("not.exist");
      cy.get("table").should("not.exist");
    });
  });
});
