describe("El laboratorio de Angular", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  // it("should be visitable", () => {
  //   cy.get("body");
  // });
  // it("should have a footer", () => {
  //   cy.get("footer");
  // });
  it("Tiene pie de página con Copyright", () => {
    cy.get("footer").contains("rights");
  });
  it("No tiene formulario", () => {
    cy.get("form").should("not.exist");
  });
  it("Tiene enlace al la página del autor albertobasalo.dev", () => {
    cy.get("[href='https://albertobasalo.dev']");
  });
  it("Tiene una sección de navegación con enlaces internos", () => {
    // One shot query
    cy.get("nav a");
    // versus step by step
    cy.get("nav").find("a");
    // versus alias and log
    cy.get("nav").as("navigation");
    cy.log("found nav");
    cy.get("@navigation").find("a");
  });
});
