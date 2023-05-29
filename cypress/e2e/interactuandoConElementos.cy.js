/// <reference types="cypress" />

describe('Interactuar con los Elementos', {browser: 'chrome'}, () =>{
  before(()=>{
    //cy.visit('/buttons')
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  let texto
  it('Click', () =>{
    cy.get('button').eq(3).click()
    cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a dynamic click')
  })
  it('Doble Click', () =>{
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click')
  })
  it('Click Derecho', () =>{
    cy.get('#rightClickBtn').rightclick()
    cy.get('#rightClickMessage').should('be.visible').and('contain', 'You have done a right click')
  })
  it('Force Click', () =>{
    cy.visit('/dynamic-properties')
    cy.get('#enableAfter').click({timeout:0, force:true})
  })
  it('Click por posicion', () =>{
    cy.get('button').eq(3).parent().parent().click('topRight')
    cy.get('button').eq(3).parent().parent().click('bottomLeft')
    cy.get('button').eq(3).parent().parent().click(5 , 60)
  })
  it('Input type text', () =>{
    cy.visit('/automation-practice-form')
    cy.get('#firstName').type('Manuel')
    cy.get('#lastName').type('Restrepo')
    cy.get('#firstName').type('{selectAll}{backspace}')
    cy.get('#firstName').type('Alejandro')
    cy.get('#firstName').clear()
  })
  it('Check boxes y radio botones', () =>{
    cy.visit('/automation-practice-form')
    // cy.get('.custom-control-label').contains('Male').click()
    cy.get('label[for="gender-radio-1"]').click()
    cy.get('label[for="hobbies-checkbox-2"]').click()
    cy.get('label[for="hobbies-checkbox-2"]').click()
  })
  it('Extrayendo informacion', function(){//se cambia de aarow function a function para accederr a utilidades como retornar valores.
    cy.visit('/automation-practice-form')
    cy.get('#firstName').as('nombre')//se usa un alias para renombrar el elemento o selector
    cy.get('@nombre').type('Manuel')

    cy.get('@nombre').then(($nombre) =>{
      texto = $nombre.val()
      expect(texto).to.eq('Manuel')
    })
    cy.get('@nombre').invoke('val').should('eq', 'Manuel')//se invoca el valor del elemento, como en la arrow function de JQuery
    cy.get('@nombre').invoke('val').as('nombreGlobal')//este valor se puede guardar globalmente gracias function()
  })
  it('Compartir Info', function(){
    cy.visit('/automation-practice-form')
    cy.get('#lastName').as('nombre2')//se usa un alias para renombrar el elemento o selector
    cy.get('@nombre2').type(texto)
    cy.get('#firstName').type(this.nombreGlobal)//este this se puede usar gracias a function()
  })
  it('Intereactuando con los dropdown(select)', () =>{
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    cy.get('.custom-select').select(10)
    cy.get('.custom-select').select('3').should('have.value','3')
    cy.get('.custom-select').select('Greece').should('have.value','4')
  })
  it('Intereactuando con los dropdown(select) dinamico', () =>{
    cy.visit('https://react-select.com/home')
    cy.get('#react-select-6-input').type(' ')
    // cy.get('#react-select-6-listbox').children().children().each(($el,$index,$list)=>{
    //   if($el.text()==='Red'){
    //     // $el.on('click')
    //     $el.click()
    //   }
    // })
    cy.get('#react-select-6-option-3').click()
  })
  it('Interactuando con tablas', () =>{
    cy.visit('https://www.w3schools.com/html/html_tables.asp')
    cy.get('#customers').find('th').each(($el)=>{
      cy.log($el.text())
    })
    cy.get('#customers').find('th').first().invoke('text').should('eq','Company')
    cy.get('#customers').find('th').eq(1).invoke('text').should('eq','Contact')
    cy.get('#customers').find('th').eq(2).invoke('text').should('eq','Country')
    cy.get('#customers').find('tr').should('have.length', 7)
    cy.get('#customers').find('tr').eq(1).find('td').eq(1).invoke('text').should('eq','Maria Anders')
    cy.get('#customers').find('tr').eq(1).find('td').eq(1).then(($el)=>{
      const texto = $el.text()
      expect(texto).to.eq('Maria Anders')
    })
  })
  it('Interactuando con date pickers', () =>{
    cy.visit('https://material.angular.io/components/datepicker/overview')
    // cy.get('datepicker-overview-example').find('input').eq(0).type('11/03/2022')
    cy.get('datepicker-overview-example').find('label').eq(0).type('11/03/2022')
    cy.get('datepicker-overview-example').find('svg').click({force:true})
  })
  it('Interactuando con modales', () =>{
    cy.visit('/modal-dialogs')
    cy.get('#showSmallModal').click()
    cy.get('#closeSmallModal').click()
  })
  it('Interactuando con PopUps', () =>{
    cy.visit('/alerts')
    // const stub =cy.stub()
    // cy.on('window:confirm',stub)
    // cy.get('#confirmButton').click().then(()=>{
    //   expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
    // })
    // cy.contains('You selected Ok').should('exist')

    // cy.get('#confirmButton').click()
    // cy.on('window:confirm',(confirm)=>{
    //   expect(confirm).to.eq('Do you confirm action?')
    // })
    // cy.contains('You selected Ok').should('exist')

    cy.get('#confirmButton').click()
    cy.on('window:confirm',(confirm)=>{
      expect(confirm).to.eq('Do you confirm action?')
      return false
    })
    cy.contains('You selected Cancel').should('exist')
  })
  it('Intereactuando con los tooltips', () =>{
    cy.visit('/tool-tips')
    cy.get('#toolTipButton').trigger('mouseover')
    cy.contains('You hovered over the Button').should('exist')
    cy.get('#toolTipButton').trigger('mouseout')
    cy.contains('You hovered over the Button').should('not.exist')
  })
  it.only('Intereactuando con drag and drop', () =>{
    cy.visit('/dragabble')
    cy.get('#dragBox').trigger('mousedown', {
      which:1,
      pageX:600,
      pageY:100,
    }).trigger('mousemove', {
      which:1,
      pageX:1000,
      pageY:600,
    }).trigger('mouseup')
  })
})