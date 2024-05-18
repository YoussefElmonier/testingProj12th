describe('Autocomplete textfields', () => {

    it('[1]enter food name', () => {

    cy.visit("https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html?food-item=")
    cy.get('[placeholder="Food Item"]').type("Apple")
    cy.get('#submit-button').click()

});
});
it('[2]dont enter food', () => {

    cy.visit("https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html?food-item=")
    cy.get('#submit-button').click()

});
