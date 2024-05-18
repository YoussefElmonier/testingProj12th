describe('Button Clicks', () => {

    it('[1]first checkbox', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#checkboxes > :nth-child(1)').click()
    

});
it('[2]second checkbox', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#checkboxes > :nth-child(3)').click()
    

});
it('[3]third checkbox', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#checkboxes > :nth-child(5)').click()

});
it('[4]fourth checkbox', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#checkboxes > :nth-child(7)').click()

});
it('[5]first radio button ', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('[value="green"]').click()
});
it('[6]second radio button ', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('[value="blue"]').click()
});
it('[7]third radio button ', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('[value="yellow"]').click()
});
it('[8]fourth radio button ', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#radio-buttons > [value="orange"]').click()
});
it('[9]last radio button ', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('[value="purple"]').click()
});
it('[10]first dropdown ', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#dropdowm-menu-1').select('Python')
});
it('[11]second dropdown ', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#dropdowm-menu-2').select('Maven')
});
it('[12]third dropdown ', () => {

    cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    cy.get('#dropdowm-menu-3').select('CSS')
});
});
