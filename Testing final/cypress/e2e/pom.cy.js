describe('pom', () => {
   
    it('[1]find out more ', () => { 
        cy.visit('https://www.webdriveruniversity.com/Page-Object-Model/index.html');
        cy.get('#button-find-out-more').click()
        cy.on('window:alert', (text) => {
        });
        cy.get('.modal-footer > :nth-child(1)').click()


    });
});
    it('[2]closed ', () => { 
        cy.visit('https://www.webdriveruniversity.com/Page-Object-Model/index.html');
        cy.get('#button-find-out-more').click()
        cy.on('window:alert', (text) => {
    });
        cy.get('.modal-footer > :nth-child(2)').click()


});
