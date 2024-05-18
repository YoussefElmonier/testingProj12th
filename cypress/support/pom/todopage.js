class ToDoPage {
    visitToDoPage() {
        cy.visit('/todo');
    }

    addToDoItem(itemText) {
        cy.get('#todo-input').type(itemText);
        cy.get('#add-todo-btn').click();
    }

    markToDoItem(index) {
        cy.get(`#todo-item-${index} input[type="checkbox"]`).check();
    }

    deleteToDoItem(index) {
        cy.get(`#todo-item-${index} .delete-btn`).click();
    }

    markAllToDos() {
        cy.get('.todo-item input[type="checkbox"]').check();
    }

    deleteAllToDos() {
        cy.get('.delete-all-btn').click();
    }
}

export default ToDoPage;
