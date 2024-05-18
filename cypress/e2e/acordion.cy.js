describe('Accordion Test - Manual Testing', () => {
    it('Visits the Accordion page and interacts with Manual Testing accordion', () => {
      cy.visit('https://www.webdriveruniversity.com/Accordion/index.html');
      cy.get('#manual-testing-accordion').click();
    });
  });
  
  it('Visits the Accordion page and interacts with Cucumber accordion', () => {
    cy.visit('https://www.webdriveruniversity.com/Accordion/index.html');
    cy.get('#cucumber-accordion').click();
  });
  
  it('Visits the Accordion page and interacts with Automation accordion', () => {
    cy.visit('https://www.webdriveruniversity.com/Accordion/index.html');
    cy.get('#automation-accordion').click();
  });
  
  it('Visits the Accordion page, clicks on #click-accordion, and checks for timeout message', () => {
    cy.visit('https://www.webdriveruniversity.com/Accordion/index.html');
    cy.get('#click-accordion').click().wait(5000);
    cy.get('#timeout').should('be.visible');
  });
//hamo