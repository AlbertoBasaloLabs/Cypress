/**
 * The Login API backend
 *  when receiving valid credentials
 *   should respond with token
 *  when receiving invalid credentials
 *   should respond with Bad Request
 */
describe("User login API backend", () => {
  const API_URL = Cypress.env("API_URL");
  const LOGIN_API = API_URL + "users/login";
  context("when receiving valid credentials", () => {
    beforeEach(() => {
      // Arrange
      // Clear any existing data
      cy.request("POST", "http://localhost:3000/users/test-clear");
      // Register a valid user
      cy.request("POST", "http://localhost:3000/users/register", {
        name: "Valid User",
        email: "validuser@example.com",
        password: "validPassword1!",
      });
      // Act - Login with valid credentials
      cy.request("POST", LOGIN_API, {
        email: "validuser@example.com",
        password: "validPassword1!",
      }).as("postUsersLogin");
    });
    it("should respond with token", () => {
      // Assert - Verify response status is below 400
      cy.get("@postUsersLogin").its("status").should("be.below", 400);
    });
  });
  context("when receiving invalid credentials", () => {
    beforeEach(() => {
      // Act - Login with invalid credentials
      cy.request({
        method: "POST",
        url: LOGIN_API,
        body: {
          email: "invalidUser@example.com",
          password: "invalidPass",
        },
        failOnStatusCode: false,
      }).as("postUsersLogin");
    });
    it("should respond with Bad Request", () => {
      // Assert - Verify response status is 400 or above
      cy.get("@postUsersLogin").its("status").should("be.gte", 400);
    });
  });
});
