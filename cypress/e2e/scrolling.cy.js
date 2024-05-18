describe('Visit Scrolling Page', () => {
  it('hovers over #zone1', () => {
    cy.visit('https://www.webdriveruniversity.com/Scrolling/index.html')
    cy.get('#zone1').trigger('mouseover')
    cy.wait(1000)
  })

  it('hovers over #zone2-entries', () => {
    cy.visit('https://www.webdriveruniversity.com/Scrolling/index.html')
    cy.get('#zone2-entries').trigger('mouseover')
    cy.wait(1000)
  })

  it('hovers over #zone3-entries', () => {
    cy.visit('https://www.webdriveruniversity.com/Scrolling/index.html')
    cy.get('#zone3-entries').trigger('mouseover')
    cy.wait(1000)
  })

  it('hovers over #zone4', () => {
    cy.visit('https://www.webdriveruniversity.com/Scrolling/index.html')
    cy.get('#zone4').trigger('mouseover')
    cy.wait(1000)
  })
})
