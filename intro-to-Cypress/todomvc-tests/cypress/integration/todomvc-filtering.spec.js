/// <reference types="cypress" />

describe('MVC Todo Filtering - Test Suite', () => {

    beforeEach(() => {
        cy.visit('https://todomvc-app-for-testing.surge.sh/')
        
        cy.get('.new-todo').type("Clean room{enter}")
        cy.get('.new-todo').type("Learn JavaScript{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()

    });

    it('Filter by Active', () => {

        cy.contains('Active').click();
        cy.get('.todo-list li').should('have.length', 2)

    });

    it('Filter by Completed', () => {

        cy.contains('Completed').click();
        cy.get('.todo-list li').should('have.length', 1)

    });

    it('Filter by All', () => {

        cy.contains('All').click();
        cy.get('.todo-list li').should('have.length', 3)

    });

});