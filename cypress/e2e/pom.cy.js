describe('Additional Tests for Webdriver University', () => {
  it('should visit products page and proceed', () => {
    cy.visitProductsPage();
    cy.clickSpecialOffers();
    cy.handleAlert();
    cy.clickProceed();
  });

  it('should visit products page and cancel', () => {
    cy.visitProductsPage();
    cy.clickSpecialOffers();
    cy.handleAlert();
    cy.clickCancel();
  });

  it('should navigate to Contact Us page', () => {
    cy.visitProductsPage();
    cy.navigateToContactUs();
  });
});
