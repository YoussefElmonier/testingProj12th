describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html")
    });

    it('[1]valid username and valid password', () => {
    

    
    cy.get('[placeholder="Username"]').type("Omarnagy")
    cy.get('[placeholder="Password"]').type("**********")
    cy.get('#login-button').click()

});
});

describe('Login', () => {
    it('[2]valid username and invalid password', () => {
    
    cy.get('[placeholder="Username"]').type("Omarnagy")
    cy.get('#login-button').click()

});
});

describe('Login', () => {
    it('[3]invalid username and valid password', () => {
    
    cy.get('[placeholder="Password"]').type("**********")
    cy.get('#login-button').click()

});
});

describe('Login', () => {
    it('[4]invalid username and invalid password', () => {
    

    cy.get('#login-button').click()

});
});




