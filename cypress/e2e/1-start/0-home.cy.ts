describe("The home page", () => {
  it("should be visitable", () => {
    cy.visit("http://localhost:4200/");
  });
  it("should have a footer", () => {
    cy.visit("http://localhost:4200/");
    cy.get("footer");
  });
  it("should contains Labs in the footer", () => {
    cy.visit("http://localhost:4200/");
    cy.get("footer").contains("Labs");
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
