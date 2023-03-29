// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('h1', 'What do you have to do today?')
  })
})
