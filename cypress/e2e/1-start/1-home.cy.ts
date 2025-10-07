describe("The home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });
  // it("should be visitable", () => {
  //   cy.get("body");
  // });
  // it("should have a footer", () => {
  //   cy.get("footer");
  // });
  it("should contains Archetype in the footer", () => {
    cy.get("footer").contains("Archetype");
  });
  it("should have un link to albertobasalo.dev and other navigation links", () => {
    cy.get("[href='https://albertobasalo.dev']");
    //cy.wait(1000);
    cy.get("nav").find("a");
  });
});
