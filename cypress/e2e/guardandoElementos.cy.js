describe('Guardadno Elementos', () =>{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  it('Repeticion', () =>{
    cy.visit('/automation-practice-form')
    //obteniendo el elemento padre
    cy.get('input[placeholder = "First Name"]').parent()
    //obteniendo los elementos padres
    cy.get('input[placeholder = "First Name"]').parents()
    cy.get('input[placeholder = "First Name"]').parents().find('label')
    cy.get('form').find('label')
  })
  it('Evitar repeticion', () =>{
    cy.visit('/automation-practice-form')
    cy.get('input[placeholder = "First Name"]').parents('form').then((form) => {
      //Guardando elementos pero como elementos JQuery
      const inputs = form.find('input')//Trabajando con JQuerys, sintaxis diferente a la de cypress
      const divs = form.find('div')
      const labels = form.find('label')

      expect(inputs.length).to.eq(15)//Trabajando con JQuerys, sintaxis diferente a la de cypress
      cy.wrap(inputs).should('have.length', 15)//Envolviendo JQuery para utilizar la sintaxis de cypress
      expect(divs.length).to.eq(70)
      expect(labels.length).to.eq(16)

      // console.log('Mostrando la longitud', inputs.length);
      //debugger
      cy.task('log', inputs.length)//esta linea usa el log descrito en cypress.config.js
      cy.log('Soy una longitud',inputs.length)//Este log aparece en la UI de cypress
    })
    cy.get('input[placeholder = "First Name"]').then(console.log)//Este log aparece en las Devtools, en la consola
    cy.get('input[placeholder = "First Name"]').debug()//Este log aparece en las Devtools, en la consola, y muestra alli el elemento q le pasamos
    // cy.pause()//Sirve para pausar el test y debuggear
    cy.get('form').find('label')
  })
})