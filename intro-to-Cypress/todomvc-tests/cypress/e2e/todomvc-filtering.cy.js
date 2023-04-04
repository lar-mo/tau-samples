/// <reference types="cypress" />
import {
    navigate,
    addTodo,
    validateTodoText,
    toggleTodo,
    clearCompleted,
    validateTodoCompletedState,
    validateToggleState,
    validateNumberOfTodosShown,
    showOnlyActiveTodos,
    showOnlyCompletedTodos,
    showAllTodos,
  } from '../page-objects/todo-page';

describe('MVC Todo Filtering - Test Suite', function() {
//   const todoPage = new TodoPage()

  beforeEach(() => {
    navigate()

    addTodo('Clean room')
    addTodo('Learn JavaScript')
    addTodo('Use Cypress')

    toggleTodo(1)
  })

  it('should filter "Active" correctly', () => {
    showOnlyActiveTodos()

    validateNumberOfTodosShown(2)
  })

  it('should filter "Completed" correctly', () => {
    showOnlyCompletedTodos()

    validateNumberOfTodosShown(1)
  })

  it('should filter "All" correctly', () => {
    showAllTodos()

    validateNumberOfTodosShown(3)
  })
})