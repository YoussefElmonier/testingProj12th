describe('Hover and Click Test', () => {
  it('double click', () => {
    cy.visit('https://www.webdriveruniversity.com/Actions/index.html');
    cy.get('h2').dblclick(); 
  });

  it('click and hold', () => {
    cy.visit('https://www.webdriveruniversity.com/Actions/index.html');
    cy.get('#click-box').trigger('mousedown'); 
  });
});
describe('Drag and Drop Test', () => {
  it('drag and drop', () => {
    cy.visit('https://www.webdriveruniversity.com/Actions/index.html');
    cy.get('#draggable > p > b').then(($draggedElement) => {
      cy.get('#droppable > p > b').then(($droppableElement) => {
        const droppablePosition = $droppableElement[0].getBoundingClientRect();
        const draggablePosition = $draggedElement[0].getBoundingClientRect();
        const offsetX = droppablePosition.x - draggablePosition.x + 10; 
        const offsetY = droppablePosition.y - draggablePosition.y + 10; 
        cy.get('#draggable > p > b').trigger('mousedown', { which: 1 });
        cy.get('body').trigger('mousemove', { clientX: draggablePosition.x + offsetX, clientY: draggablePosition.y + offsetY });
        cy.get('#droppable > p > b').trigger('mouseup');
      });
    });
  });
});
describe('Hover and Click Test', () => {
  it('hover and choose Link 1', () => {
    cy.visit('https://www.webdriveruniversity.com/Actions/index.html');
    cy.get('.hover > .dropbtn').trigger('mouseover');
    cy.get('.hover .dropdown-content').contains('Link 1').click();
  });
});


