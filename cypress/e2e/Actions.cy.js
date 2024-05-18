// test.spec.js

describe('Hover and Click Test', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Actions/index.html');
  });

  it('double click', () => {
    cy.doubleClick();
  });

  it('click and hold', () => {
    cy.clickAndHold();
  });
});

describe('Drag and Drop Test', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Actions/index.html');
  });

  it('drag and drop', () => {
    cy.dragAndDrop();
  });
});

describe('Hover and Click Test for Link', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Actions/index.html');
  });

  it('hover and choose Link 1', () => {
    cy.hoverAndClickLink();
  });
});

///
