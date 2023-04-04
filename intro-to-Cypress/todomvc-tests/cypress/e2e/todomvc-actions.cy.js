/// <reference types="cypress" />

// import { TodoPage } from "../page-objects/todo-page";
import {
    navigate,
    addTodo,
    validateTodoText,
    toggleTodo,
    clearCompleted,
    validateTodoCompletedState,
    validateToggleState,
    validateNumberOfTodosShown,
  } from '../page-objects/todo-page';

describe('MVC Todo Actions - Test Suite', () => {

    // const todoPage = new TodoPage();

    beforeEach('Visit URL, create todo', () => {

        // cy.visit('https://todomvc-app-for-testing.surge.sh/')
        // todoPage.navigate();
        navigate();
        // cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
        // todoPage.addTodo("Learn Cypress");
        addTodo("Learn Cypress");  

    });

    it('Create a new todo', () => {

        // cy.get('label').should('have.text', "Clean room")
        validateTodoText(0, "Learn Cypress")
        // cy.get('.toggle').should('not.be.checked')
        toggleTodo(0)

    });

    it('Mark todo item as complete', () => {
        
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    });

    it('Clear Completed', () => {

        cy.get('.toggle').click()
        cy.contains('Clear completed').click()    //partial match to "Clear" works
        cy.get('.todo-list').should('not.have.descendants', 'li')

    });
});