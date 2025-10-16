// Demonstrate the
// use of fixtures for stubbing network responses
// use of commands for reusable logic

/**
 * User login process
 *  when server responds with valid credentials
 *    should redirect to user page
 *    should save user data in local storage
 *  when server responds with Bad Request
 *    should display failure message to user
 */
describe("User login API integration", () => {
  const API_URL = Cypress.env("API_URL");
  const LOGIN_API = API_URL + "users/login";
  beforeEach(() => {
    // Arrange - Clear local storage and visit login page
    cy.clearLocalStorage();
  });
  context("when server responds with valid credentials", () => {
    beforeEach(() => {
      // Arrange - Setup network intercepts
      cy.intercept("POST", LOGIN_API, { fixture: "user-token" }).as(
        "postUsersLogin"
      );
      // Act - Submit form
      cy.login();
    });
    it("should redirect to user page, and save user data in local storage", () => {
      cy.wait("@postUsersLogin");
      // Assert - Verify redirection to user page
      cy.url().should("include", "/user");
      // Local storage should contain user data
      cy.window()
        .its("localStorage")
        .invoke("getItem", "global")
        .should("contain", "userToken");
    });
  });
  context("when server responds with Bad Request", () => {
    beforeEach(() => {
      // Arrange - Setup network intercepts
      cy.intercept("POST", LOGIN_API, {
        statusCode: 400,
        fixture: "bad-request",
      }).as("postUsersLogin");
      // Act - Submit form
      cy.login();
    });
    it("should display failure message to user", () => {
      cy.wait("@postUsersLogin");
      // Assert - Verify failure message is displayed
      // hack: the failure message is stored in a readonly input field
      cy.get('[name="failure"]').should(
        "have.value",
        "Http failure response for : 400 Bad Request"
      );
    });
  });
});
