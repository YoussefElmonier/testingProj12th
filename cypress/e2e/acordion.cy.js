describe('Accordion Test - Custom Commands', () => {
  it('Visits the Accordion page and interacts with Manual Testing accordion', () => {
      cy.visitAccordionPage();
      cy.clickAccordion('#manual-testing-accordion');
  });

  it('Visits the Accordion page and interacts with Cucumber accordion', () => {
      cy.visitAccordionPage();
      cy.clickAccordion('#cucumber-accordion');
  });

  it('Visits the Accordion page and interacts with Automation accordion', () => {
      cy.visitAccordionPage();
      cy.clickAccordion('#automation-accordion');
  });

  it('Visits the Accordion page, clicks on #click-accordion, and checks for timeout message', () => {
      cy.visitAccordionPage();
      cy.clickAndWaitForTimeout('#click-accordion', '#timeout');
  });
});
//