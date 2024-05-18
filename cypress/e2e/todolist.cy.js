
describe('To-Do List', () => {
    beforeEach(() => {
        cy.visitToDoPage();
    });

    it('[1] Add new item to the to-do list', () => {
        cy.addToDo('anzl el ahwa');
    });

    it('[2] Mark the first to-do item', () => {
        cy.markToDo(1);
    });

    it('[3] Delete the first to-do item', () => {
        cy.deleteToDo(1);
    });

    it('[4] Delete the first and last to-do items', () => {
        cy.deleteToDo(1);
        cy.deleteToDo(3);
    });

    it('[5] Mark all to-do items', () => {
        cy.addToDo('anzl ageb mousa roman');
        cy.addToDo('atlob akl');
        cy.markAllToDos();
    });

    it('[6] Delete all to-do items', () => {
        cy.deleteAllToDos();
    });
});
