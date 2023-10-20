const { it } = require("node:test")

/// <reference types="cypress" />

descibre('acessando a página', () => {
    it('verificar o título da página', () => {
        cy.visit('')

        cy.title().should('be.equal', 'Calculadora de Salário')
        cy.title().should('contain', 'Alagoas')

        cy.get("salarioBruto").type("10000")
        cy.get("#calcularINSS").click()
        cy.get("#calcularIRPF").click()
        cy.get("#calcularSalarioLiquido").click()

    });

})