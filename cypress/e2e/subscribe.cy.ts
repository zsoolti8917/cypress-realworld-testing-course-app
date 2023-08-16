import { it } from "mocha"

describe("Newsletter Subscribe Form", () =>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })

    it("allows users to subscribe to the email list", () =>{
        cy.getByData("email-input").type("test@test.com").should("be.visible")
        cy.getByData("submit-button").click()

        cy.getByData("success-message").should("exist").contains("test@test.com")
    })

    it("does Not allow an invalid email address", ()=>{
        cy.getByData("email-input").type("testtest.com").should("be.visible")
        cy.getByData("submit-button").click()

        cy.getByData("success-message").should("not.exist")
    })

    it("User is already subscribed", ()=>{
        cy.getByData("email-input").type("john@example.com").should("be.visible")
        cy.getByData("submit-button").click()

        cy.getByData("server-error-message").should("exist").should('contain',"Error:")
    })
})