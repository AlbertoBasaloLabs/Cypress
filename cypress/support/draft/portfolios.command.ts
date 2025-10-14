export function deleteAllPortfolios() {
  const API_URL = Cypress.env("API_URL");
  cy.request("DELETE", `${API_URL}portfolios`);
}

export const createPortfolio = (cash: number, name: string) => {
  cy.get("[name='initial_cash']").clear().type(cash.toString());
  cy.get("[name='name']").clear().type(name);
  cy.get("button").contains("Create").click();
};
