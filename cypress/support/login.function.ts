export function login(): Cypress.CommandFn<"login"> {
  return () => {
    cy.visit("user/login");
    cy.fixture("user-credentials").then((user) => {
      cy.get("#email").type(user.email);
      cy.get("#password").type(user.password);
    });
    cy.get("button").contains("Login").click();
  };
}
