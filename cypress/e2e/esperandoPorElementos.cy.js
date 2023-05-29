describe('Esperando por elementos', () =>{
  before(()=>{
    cy.visit('https://www.platzi.com')
  })

  it('Esperar por un tiempo definido', () =>{
    cy.wait(5000)
  })
  it('Esperar por un elemento', () =>{
    cy.get('.Nav-header-desktopCtas > .Nav-header-mobileCtas-actions > .Nav-header-mobileCtas-actions--login',{timeout:6000})
  })
  it('Esperar por un elemento y hacer una asercion', () =>{
    cy.get('.Nav-header-desktopCtas > .Nav-header-mobileCtas-actions > .Nav-header-mobileCtas-actions--login',{timeout:6000}).should('be.visible')
  })
})

describe('Esperando por elementos 2', () =>{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  before(()=>{
    cy.visit('/')
  })

  it('Deshabilitar el retry', () =>{
    cy.get(':nth-child(3) > :nth-child(1) > .card-body',{timeout:0})
  })
})
