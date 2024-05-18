describe('Visit Webdriver University Products Page', () => {
    it('should click on  "Proceed"', () => {
      cy.visit('https://www.webdriveruniversity.com/Page-Object-Model/products.html#');
      cy.get('#container-special-offers > .section-title > .sub-heading').click();
      cy.on('window:alert', (text) => {
      });
      cy.get('.modal-footer > :nth-child(1)').click();
    });
    it('should click cancel', () => {
        cy.visit('https://www.webdriveruniversity.com/Page-Object-Model/products.html#');
        cy.get('#container-special-offers > .section-title > .sub-heading').click();
        cy.on('window:alert', (text) => {
        });
        cy.get('.modal-footer > :nth-child(2)').click();
      });
  });
  describe('Navigate to Contact Us Page', () => {
    it('should navigate to Contact Us page when clicked', () => {
      cy.visit('https://www.webdriveruniversity.com/Page-Object-Model/products.html#');
      cy.get('.nav > :nth-child(3) > a').click();
      cy.url().should('eq', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html');
    });
  });
  