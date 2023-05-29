describe('Primer Prueba', () =>{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  it('Obtener por medio de un tag', () =>{
    cy.visit('/automation-practice-form')
    cy.get('input')
  })
  it('Obtener por medio de un atributo', () =>{
    cy.get('[placeholder = "First Name"]')
  })
  it('Obtener por medio de un atributo y un tag', () =>{
    cy.get('input[placeholder = "First Name"]')
  })
  it('Obtener por medio de un id', () =>{
    cy.get('#firstName')
  })
  it('Obtener por medio de una class', () =>{
    cy.get('.mr-sm-2.form-control')
  })
  it('Usando contains', () =>{
    cy.contains('Reading')
    cy.contains('.header-wrapper','Widgets')
  })
  it('Usando parent', () =>{
    //obteniendo el elemento padre
    cy.get('input[placeholder = "First Name"]').parent()
    //obteniendo los elementos padres
    cy.get('input[placeholder = "First Name"]').parents()
    cy.get('input[placeholder = "First Name"]').parents().find('label')
    cy.get('form').find('label')
  })
})