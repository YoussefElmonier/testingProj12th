// da el pom
Cypress.Commands.add('visitProductsPage', () => {
    cy.visit('https://www.webdriveruniversity.com/Page-Object-Model/products.html#');
  });
  
  Cypress.Commands.add('clickSpecialOffers', () => {
    cy.get('#container-special-offers > .section-title > .sub-heading').click();
  });
  
  Cypress.Commands.add('handleAlert', () => {
    cy.on('window:alert', (text) => {
    });
  });
  
  Cypress.Commands.add('clickProceed', () => {
    cy.get('.modal-footer > :nth-child(1)').click();
  });
  
  Cypress.Commands.add('clickCancel', () => {
    cy.get('.modal-footer > :nth-child(2)').click();
  });
  
  Cypress.Commands.add('navigateToContactUs', () => {
    cy.get('.nav > :nth-child(3) > a').click();
    cy.url().should('eq', 'https://www.webdriveruniversity.com/Contact-Us/contactus.html');
  });
  //da el cordinblu
Cypress.Commands.add('visitAccordionPage', () => {
    cy.visit('https://www.webdriveruniversity.com/Accordion/index.html');
});

Cypress.Commands.add('clickAccordion', (accordionId) => {
    cy.get(accordionId).click();
});

Cypress.Commands.add('clickAndWaitForTimeout', (accordionId, timeoutSelector, timeout = 5000) => {
    cy.get(accordionId).click().wait(timeout);
    cy.get(timeoutSelector).should('be.visible');
});
// da el to do
Cypress.Commands.add('visitToDoPage', () => {
    cy.visit('https://www.webdriveruniversity.com/To-Do-List/index.html');
});

Cypress.Commands.add('addToDo', (item) => {
    cy.get('input').type(`${item}{enter}`);
});

Cypress.Commands.add('markToDo', (index) => {
    cy.get(`ul > :nth-child(${index})`).click();
});

Cypress.Commands.add('deleteToDo', (index) => {
    cy.get(`:nth-child(${index}) > span > .fa`).click();
});

Cypress.Commands.add('markAllToDos', () => {
    cy.get('ul > li').each(($el) => {
        cy.wrap($el).click();
    });
});

Cypress.Commands.add('deleteAllToDos', () => {
    cy.get('ul > li > span > .fa').each(($el) => {
        cy.wrap($el).click();
    });
});
// conatc us ya zmely
Cypress.Commands.add('visitContactUsPage', () => {
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
});

Cypress.Commands.add('fillContactForm', (firstName, lastName, email, message) => {
    if (firstName !== undefined) {
        cy.get('input[name="first_name"]').type(firstName);
    }
    if (lastName !== undefined) {
        cy.get('input[name="last_name"]').type(lastName);
    }
    if (email !== undefined) {
        cy.get('input[name="email"]').type(email);
    }
    if (message !== undefined) {
        cy.get('textarea[name="message"]').clear(message);
    }
});

Cypress.Commands.add('submitContactForm', () => {
    cy.get('[type="submit"]').should('be.visible').click();
});

Cypress.Commands.add('resetContactForm', () => {
    cy.get('[type="reset"]').should('be.visible').click();
});

Cypress.Commands.add('checkContactFormField', (fieldName, value) => {
    cy.get(`input[name="${fieldName}"]`).should('have.value', value);
});

Cypress.Commands.add('checkErrorMessage', (message) => {
    cy.contains(message).should('be.visible');
});
// scroll
Cypress.Commands.add('hoverOverElement', (selector) => {
    cy.visit('https://www.webdriveruniversity.com/Scrolling/index.html')
    cy.get(selector).trigger('mouseover')
    cy.wait(1000)
  })
  // actions 
  // commands.js

Cypress.Commands.add('doubleClick', () => {
    cy.get('h2').dblclick(); 
  });
  
  Cypress.Commands.add('clickAndHold', () => {
    cy.get('#click-box').trigger('mousedown'); 
  });
  
  Cypress.Commands.add('dragAndDrop', () => {
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
  
  Cypress.Commands.add('hoverAndClickLink', () => {
    cy.get('.hover > .dropbtn').trigger('mouseover');
    cy.get('.hover .dropdown-content').contains('Link 1').click();
  });
//hamo  aaa