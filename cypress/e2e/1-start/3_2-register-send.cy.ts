/**
 * The register process
 *  when the user fills the form correctly
 *    should send a request to the server with the user data
 *    and move to the user page on successful registration
 *  when the user fills the form incorrectly (repeated credentials)
 *    should display an error message on failed registration
 *    and stay on the register page on failed registration
 */
describe("The register process", () => {
  const registerWebUrl = "user/register";
  const registerApiUrl = "**/users/register";
  const inputUser = {
    name: "Coyote",
    email: "coyote@acme.com",
    password: "1234a",
  };
  before(() => {
    cy.request("POST", "http://localhost:3000/users/test-clear");
  });
  beforeEach(() => {
    cy.intercept("POST", registerApiUrl).as("postUsersRegister");
    cy.visit(registerWebUrl);
  });
  context("when the user fills the form correctly", () => {
    it("should send a request to the server with the user data and move to the user page on successful registration", () => {
      // Arrange
      cy.get("#name").type(inputUser.name);
      cy.get("[type='email']").type(inputUser.email);
      cy.get("[name='password']").type(inputUser.password);
      cy.get("[type='password']").last().type(inputUser.password);
      cy.get("form").find("fieldset").find("input").last().check();
      // Act
      cy.get("form > button").first().click();
      // Assert
      cy.wait("@postUsersRegister")
        .its("request.body.email")
        .should("equal", inputUser.email);
      cy.url().should("include", inputUser.name.toLowerCase());
    });
  });
  context(
    "when the user fills the form incorrectly (repeated credentials)",
    () => {
      it("should display an error message on failed registration and stay on the register page on failed registration", () => {
        // Arrange
        cy.get("#name").type(inputUser.name);
        cy.get("[type='email']").type(inputUser.email);
        cy.get("[name='password']").type(inputUser.password);
        cy.get("[type='password']").last().type(inputUser.password);
        cy.get("form").find("fieldset").find("input").last().check();
        // Act
        cy.get("form > button").first().click();
        // Assert
        cy.wait("@postUsersRegister")
          .its("response.statusCode")
          .should("eq", 400);
        cy.get("section#failed").should("be.visible");
        cy.url().should("include", registerWebUrl);
      });
    }
  );
});
