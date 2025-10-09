/**
 * Given the create portfolio form
 *  When the form is filled and submitted
 *   Then should display a the portfolio summary
 */
describe.skip("Given the create portfolio form", () => {
  context("When the form is filled and submitted", () => {
    it("Then should display a the portfolio summary", () => {
      cy.visit("");
      cy.get("[name='initial_cash']").as("initial_cash");
      cy.get("@initial_cash").clear();
      cy.get("@initial_cash").type("6547");
      cy.get("button").contains("Create").click();
      cy.get("dl > :nth-child(2)").contains("$6,547.00");
    });
  });
});
