/// <reference types="cypress" />

it('should be able to create a new todo', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")

    cy.get('label').should('have.text', "Clean room")

    cy.get('.toggle').should('not.be.checked')

    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    cy.contains('Clear completed').click()    //partial match to "Clear" works
    cy.get('.todo-list').should('not.have.descendants', 'li')
})