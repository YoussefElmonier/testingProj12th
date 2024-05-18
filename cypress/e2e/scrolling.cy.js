describe('Visit Scrolling Page', () => {
  it('hovers over elements', () => {
    cy.hoverOverElement('#zone1')
    cy.hoverOverElement('#zone2-entries')
    cy.hoverOverElement('#zone3-entries')
    cy.hoverOverElement('#zone4')
  })
})
////