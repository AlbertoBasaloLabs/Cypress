/**
 * The register form
 *   should have a form with 5 clean inputs and a submit button disabled
 *   when the users fills the form correctly
 *     should allow to submit the form
 *   when the user fills the form incorrectly
 *     should disabled the submit button when start
 *     should not mark the email as invalid if it is empty, but list in error section
 *     should mark the email as invalid if it is not an email
 *   when the user resets the form
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
  context("when the user fills the form incorrectly", () => {
    it("should disabled the submit button when start", () => {
      cy.get("form > button").first().should("be.disabled");
    });
    it("should not mark the email as invalid if it is empty, but list in error section", () => {
      cy.get("[type='email']:invalid").should("not.exist");
      // the control must be in the error section
      cy.get("section").contains("email");
    });
    it("should mark the email as invalid if it is not an email", () => {
      cy.get("[type='email']").type("peter");
      cy.get("[type='email']:invalid").should("exist");
      cy.get("section").contains("email");
    });
  });
  context("when the user resets the form", () => {
    it("should clear the form when the reset button is clicked", () => {
      // Arrange
      cy.get("#name").type("Peter");
      cy.get("[type='email']").type("peter@acme.com");
      cy.get("[name='password']").type("1234z");
      cy.get("[type='password']").last().type("1234z");
      cy.get("form").find("fieldset").find("input[type='checkbox']").check();
      // Act (click button of type reset)
      cy.get("form").find("button[type='reset']").click();
      // Assert
      cy.get("#name").should("have.value", "");
      cy.get("[type='email']").should("have.value", "");
      cy.get("[name='password']").should("have.value", "");
      cy.get("[type='password']").last().should("have.value", "");
      cy.get("form")
        .find("fieldset")
        .find("input")
        .last()
        .should("not.be.checked");
    });
  });
});
