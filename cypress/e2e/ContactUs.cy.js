describe('Form contact us Test', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
  });

  it('should fill out the form and submit successfully', () => {
    cy.get('input[name="first_name"]').type('youssef');
    cy.get('input[name="last_name"]').type('elmonier');
    cy.get('input[name="email"]').type('elmonier@example.com');
    cy.get('textarea[name="message"]').type('Testaya.');

    cy.get('[type="submit"]').should('be.visible').click();
  });
});
describe('Form contact us Test with reset', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
  });

  it('should fill out the form and reset successfully', () => {
    cy.get('input[name="first_name"]').type('youssef');
    cy.get('input[name="last_name"]').type('elmonier');
    cy.get('input[name="email"]').type('elmonier@example.com');
    cy.get('textarea[name="message"]').type('Testaya.');
    cy.get('[type="reset"]').should('be.visible').click();
    cy.get('input[name="first_name"]').should('have.value', '');
    cy.get('input[name="last_name"]').should('have.value', '');
    cy.get('input[name="email"]').should('have.value', '');
  });
});
describe('Form contact us Test without first name', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
  });

  it('should not submit the form without first name', () => {
    cy.get('input[name="last_name"]').type('elmonier');
    cy.get('input[name="email"]').type('elmonier@example.com');
    cy.get('textarea[name="message"]').type('Testaya.');
    cy.get('[type="submit"]').should('be.visible').click();
    cy.contains('Error: all fields are required').should('be.visible');
  });
});
describe('Form contact us Test without @', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
  });

  it('should not submit the form without  @', () => {
    cy.get('input[name="last_name"]').type('elmonier');
    cy.get('input[name="email"]').type('elmonier');
    cy.get('textarea[name="message"]').type('Testaya.');
    cy.get('[type="submit"]').should('be.visible').click();
    cy.contains('Error: all fields are required').should('be.visible');
    cy.contains('Error: Invalid email address').should('be.visible');
  });
});
describe('Form contact us Test without message', () => {
  beforeEach(() => {
    cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
  });

  it('should not submit the form without message', () => {
    cy.get('input[name="first_name"]').type('youssef');
    cy.get('input[name="last_name"]').type('elmonier');
    cy.get('input[name="email"]').type('elmonier@example.com');
    cy.get('textarea[name="message"]').clear();
    cy.get('[type="submit"]').should('be.visible').click();
    cy.contains('Error: all fields are required').should('be.visible');
  });
});
