import { BuyAssetPo } from "../../support/buy-asset.po";

/**
 * Given the a adding a new asset
 *   When is invalid buy
 *    Then should display error
 */
describe("Given the a adding a new asset", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.deleteAllPortfolios();
  });
  context("When the portfolio has founds", () => {
    beforeEach(() => {
      cy.createPortfolio(1000, "Test Portfolio");
      cy.get("a").contains("Add new asset").click();
    });
    context("When is the buy is too high", () => {
      it("should display error", () => {
        const buyAssetPo = new BuyAssetPo();
        buyAssetPo.selectSymbol("MSFT");
        buyAssetPo.typeUnits(100);
        buyAssetPo.clickButton();
        cy.get(buyAssetPo.selectorAppError).should("exist");
      });
    });
  });
  context("When the portfolio has few founds", () => {
    beforeEach(() => {
      cy.createPortfolio(10, "Test Portfolio");
      cy.get("a").contains("Add new asset").click();
    });
    context("When is a valid buy", () => {
      it("should display error", () => {
        const buyAssetPo = new BuyAssetPo();
        buyAssetPo.selectSymbol("MSFT");
        buyAssetPo.typeUnits(1);
        buyAssetPo.clickButton();
        cy.get(buyAssetPo.selectorAppError).should("exist");
      });
    });
  });
});
