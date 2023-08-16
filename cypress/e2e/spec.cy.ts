describe('home page', () => {

  beforeEach(() =>{
    cy.visit('http://localhost:3000/')
  })

  it('check if the h1 has the good content', () => {
    
    cy
      .getByData("hero-heading")
      .contains("Testing Next.js Applications with Cypress" )
  })

  it("the features of the homepage is correct", () => {
    
    cy.get("dt").eq(0).contains('4 Courses').should('be.visible')
    cy.get("dt").eq(1).contains('25+ Lessons').should('be.visible')
    cy.get("dt").eq(2).contains('Free and Open Source').should('be.visible')
  })
})