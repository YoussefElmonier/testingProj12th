describe('Form contact us Test', () => {
  beforeEach(() => {
      cy.visitContactUsPage();
  });

  it('should fill out the form and submit successfully', () => {
      cy.fillContactForm('youssef', 'elmonier', 'elmonier@example.com', 'Testaya.');
      cy.submitContactForm();
  });
});

describe('Form contact us Test with reset', () => {
  beforeEach(() => {
      cy.visitContactUsPage();
  });

  it('should fill out the form and reset successfully', () => {
      cy.fillContactForm('youssef', 'elmonier', 'elmonier@example.com', 'Testaya.');
      cy.resetContactForm();
      cy.checkContactFormField('first_name', '');
      cy.checkContactFormField('last_name', '');
      cy.checkContactFormField('email', '');
  });
});

describe('Form contact us Test without first name', () => {
  beforeEach(() => {
      cy.visitContactUsPage();
  });

  it('should not submit the form without first name', () => {
      cy.fillContactForm(undefined, 'elmonier', 'elmonier@example.com', 'Testaya');
      cy.submitContactForm();
      cy.checkErrorMessage('Error: all fields are required');
  });
});

describe('Form contact us Test without @', () => {
  beforeEach(() => {
      cy.visitContactUsPage();
  });

  it('should not submit the form without @', () => {
      cy.fillContactForm('youssef', 'elmonier', 'elmonier', 'Testaya.');
      cy.submitContactForm();
      cy.checkErrorMessage('Error: all fields are required');
      cy.checkErrorMessage('Error: Invalid email address');
  });
});

describe('Form contact us Test without message', () => {
  beforeEach(() => {
      cy.visitContactUsPage();
  });

  it('should not submit the form without message', () => {
      cy.fillContactForm('youssef', 'elmonier', 'elmonier@example.com', '');
      cy.submitContactForm();
      cy.checkErrorMessage('Error: all fields are required');
  });
});
