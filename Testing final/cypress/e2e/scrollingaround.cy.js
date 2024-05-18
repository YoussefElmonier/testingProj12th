describe('scrolling around', () => {
    beforeEach(() => {
      cy.visit('https://www.webdriveruniversity.com/Scrolling/index.html');
    });
  
    it('[1]first item', () => {
      cy.get('#zone1').trigger('mouseover');
      cy.wait(1000);
    });
  
    it('[2]second item', () => {
      cy.get('#zone2').trigger('mouseover');
      cy.wait(1000);
    });
  
    it('[3]third item', () => {
      cy.get('#zone3').trigger('mouseover');
      cy.wait(1000);
    });
  
    it('[4]last item', () => {
      cy.get('#zone4').trigger('mouseover');
      cy.wait(1000);
    });
  });