/**
 * The register form
 *     should have a form with 5 clean inputs and a submit button disabled
 *   when the users fills the form correctly
 *     should allow to submit the form
 *     should mark all inputs as valid
 *   when the user fills the form incorrectly
 *     should disabled the submit button when start
 *     should mark the name as invalid if it is empty
 *     should mark the name as invalid after clear it
 *     should not show an error message to the user before interaction
 *     should show an error message to the user after typing invalid data
 *     should mark the name as valid if it is not empty
 *     should mark the email as invalid if it is not an email
 *  when the user resets the form
 *     should clear the form when the reset button is clicked
 */
describe("The register form", () => {
  const registerUrl = "user/register";
  beforeEach(() => {
    cy.visit(registerUrl);
  });
  it("should have a form with 5 clean inputs and a submit button disabled", () => {
    cy.get("form").find("fieldset").find("input").should("have.length", 5);
    cy.get("button").first().should("be.disabled");
  });
  context("when the users fills the form correctly", () => {
    it("should allow to submit the form", () => {
      cy.get("#name").type("Peter");
      cy.get("[type='email']").type("peter@acme.com");
      cy.get("[name='password']").type("1234z");
      cy.get("[type='password']").last().type("1234z");
      cy.get("form").find("fieldset").find("input").last().check();
      cy.get("form > button").first().should("be.enabled");
    });
  });
});
