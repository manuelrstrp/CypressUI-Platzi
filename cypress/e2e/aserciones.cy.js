describe('Aserciones', () =>{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  before(()=>{
    cy.visit('/automation-practice-form')
  })
  after(()=>{
    cy.visit('/')
  })
  it('Asercion', () =>{
    cy.url().should('include', 'demoqa.com')//Primer tipo de asercion con should
    cy.get('#firstName').should('be.visible')
    cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
  })
  it('Asercion 2', () =>{
    cy.get('#firstName').then((element) =>{
      expect(element).to.be.visible
      expect(element).to.have.attr('placeholder', 'First Name')
    })//Segundo tipo de asercion con then y expect para elementos JQuerys
  })
  it('Asercion 3', () =>{
    cy.get('#firstName').then((element) =>{
      assert.equal(element.attr('placeholder'), 'First Name')
    })//Tercer tipo de asercion con then y assert para elementos JQuerys
  })
})