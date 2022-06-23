it('only shows a promotional modal on first visit', () => {
    cy.visit('http://localhost:3000/')
      .get('[data-testid=modal]')
      .should('be.visible')
      .get('[aria-label=Close]')
      .click()
  
      // should not load a second time
      .reload()
      .get('[data-testid=modal]')
      .should('not.exist')
  })