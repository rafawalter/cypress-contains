/// <reference types="cypress" />

context('Contains', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/querying')
    })

    context('should work with regex', () => {
        it('.get().contains() works', () => {
            cy.get('.query-btn').contains(/Button/)
        })
        it('.contains() works', () => {
            cy.contains('.query-btn', /.+/)
        })
    })


    context('should fail with regex', () => {
        it('.get().contains() fails when regexp not found', () => {
            cy.get('.query-btn').contains(/Button123/)
        })

        it('.contains() fails when regexp not found', () => {
            cy.contains('.query-btn', /Button123/)
        })
    })
})
