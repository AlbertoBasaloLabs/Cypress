export class BuyAssetPo {
  // public inputSymbol = cy.get("#symbol");
  // public inputPricePerUnit = cy.get("#price_per_unit");
  public selectorAppError = "app-error";

  public selectSymbol(symbol: string) {
    cy.get("select[name=symbol]").select(symbol);
  }

  public typeUnits(units: number) {
    cy.get("#units").clear().type(units.toString());
  }
  public clickButton() {
    cy.get("button").click();
  }
}
