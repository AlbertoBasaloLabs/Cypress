import { BuyAssetPo } from "../../support/buy-asset.po";

/**
 * Given the a adding a new asset
 *   When is valid buy
 *    Then should not display error
 */
describe("Given the a adding a new asset", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.deleteAllPortfolios();
    cy.createPortfolio(1000, "Test Portfolio");
    cy.get("a").contains("Add new asset").click();
  });
  context("When is valid buy", () => {
    it("should navigate to the asset form page", () => {
      const buyAssetPo = new BuyAssetPo();
      // buyAssetPo.inputSymbol.clear().type("MSFT");
      buyAssetPo.selectSymbol("MSFT");

      // buyAssetPo.inputSymbol.clear().type("10");

      buyAssetPo.typeUnits(1);
      buyAssetPo.clickButton();
      cy.get(buyAssetPo.selectorAppError).should("not.exist");
    });
  });
});
