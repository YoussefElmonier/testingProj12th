describe('To-Do List', () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html")
    });

    it('[1] Add new item to the to-do list', () => {
        cy.get('input').type("anzl el ahwa{enter}")
    });

    it('[2] Mark the first to-do item', () => {
        cy.get('ul > :nth-child(1)').click()
    });

    it('[3] Delete the first to-do item', () => {
        cy.get(':nth-child(1) > span > .fa').click()
    });

    it('[4] Delete the first and last to-do items', () => {
        cy.get(':nth-child(1) > span > .fa').click()
        cy.get(':nth-child(3) > span > .fa').click()
    });

    it('[5] Mark all to-do items', () => {
        cy.get('input').type("anzl ageb mousa roman{enter}") 
        cy.get('input').type("atlob akl{enter}")     
        cy.get('ul > :nth-child(1)').click()
        cy.get('ul > :nth-child(2)').click()
        cy.get('ul > :nth-child(3)').click()
        cy.get('ul > :nth-child(4)').click()
        cy.get('ul > :nth-child(5)').click()
    });

    it('[6] Delete all to-do items', () => {
        cy.get(':nth-child(1) > span > .fa').click()
        cy.get(':nth-child(2) > span > .fa').click() 
        cy.get(':nth-child(3) > span > .fa').click()
    });
});
