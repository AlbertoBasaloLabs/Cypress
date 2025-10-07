/**
 * The Application navigation links
 *   should have a link to the repository page
 *   should have a header link with 'register' text
 *   should have a header link to user/register url
 *   should navigate to the register page
 *   should not have broken links
 */
describe("The application navigation links", () => {
  before(() => {
    //cy.log("1 - Once Before all");
  });
  beforeEach(() => {
    //cy.log("2 - Once for each It");
    cy.visit("");
  });
  it("should have a link to the repository page", () => {
    //cy.log("3 - Inside an it");
    cy.get("a[href='https://github.com/AlbertoBasaloLabs/Angular']");
  });
  it("should have a header link with 'register' text", () => {
    //cy.log("x - Inside another  it");
    cy.get("a").contains("Register");
  });
  it("should have a header link to user/register url", () => {
    cy.get("a[href='/user/register']");
  });
  it.skip("should navigate to user/register url when click on register", () => {
    cy.get("a[href='/user/register']", { timeout: 500 }).click();
    //cy.log("click to navigate to register page");
    cy.url({ timeout: 2000 }).should(
      "eq",
      "http://localhost:4200/user/register"
    );
  });
  it.only("should not have broken links", () => {
    cy.get("a").each((a) => cy.request(a.prop("href")));
  });
  afterEach(() => {
    //cy.log("4 - Once for each It");
  });
  after(() => {
    //cy.log("5 - Once after all");
  });
});
