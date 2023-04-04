/// <reference types='cypress' />
import * as todoPage from '../page-objects/todo-page'

describe('Visual Validation', () => {
    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC'}))
    afterEach(() => cy.eyesClose()) 

    it('Should look good', () => {
        cy.eyesCheckWindow('empty todo list')
        todoPage.addTodo('Do dishes')
        todoPage.addTodo('Learn JavaScript')

        cy.eyesCheckWindow('two todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('mark as completed')
    })
})
