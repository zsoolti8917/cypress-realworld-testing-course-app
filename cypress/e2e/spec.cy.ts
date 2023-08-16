describe('home page', () => {

  beforeEach(() =>{
    cy.visit('http://localhost:3000/')
  })

  context("Hero section", () =>{
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

  context("Courses section", () =>{
    it.only("Course: Testing your first Next.js Application", ()=>{
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    it.only("Course: Testing Foundations", ()=>{
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })

    it.only("Course: Cypress fundamentals", ()=>{
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})