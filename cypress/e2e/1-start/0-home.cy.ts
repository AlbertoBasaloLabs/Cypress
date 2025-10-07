describe("The home page", () => {
  it("should be visitable", () => {
    cy.visit("http://localhost:4200/");
  });
  it("should have a footer", () => {
    cy.visit("http://localhost:4200/");
    cy.get("footer");
  });
  it("should contains Archetype in the footer", () => {
    cy.visit("http://localhost:4200/");
    cy.get("footer").contains("Archetype");
  });
  it("should have un link to albertobasalo.dev", () => {
    cy.visit("http://localhost:4200/");
    cy.get("[href='https://albertobasalo.dev']");
  });
  it("should have nav anchor", () => {
    cy.visit("http://localhost:4200/");
    cy.get("nav").find("a").should("exist");
  });
});
