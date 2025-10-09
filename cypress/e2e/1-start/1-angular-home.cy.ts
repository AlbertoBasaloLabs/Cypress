describe("El laboratorio de Angular", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
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
    cy.get("nav").find("a");
  });
});
