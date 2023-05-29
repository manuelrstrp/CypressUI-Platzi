describe('Navegacion', {browser: 'chrome'}, () =>{
  it('Navegar a nuestra primer pagina', () =>{
    cy.visit('https://www.platzi.com/')
  })
  it('Recargar pagina', () =>{
    cy.reload()
  })
  it('Recargar pagina de forma forzada', () =>{
    cy.visit('https://www.google.com/')
    cy.reload(true)//forza el reload, recarga la pagina sin esperar el cache
  })
  it('Navegar hacia atras', () =>{
    cy.visit('https://www.google.com/')
    cy.visit('https://www.google.com/search?q=platzi&source=hp&ei=ZzE4ZITnDuyLwbkP8pSykAg&iflsig=AOEireoAAAAAZDg_dxJIhd8fS4mLPsvhou73mK5F8U6i&ved=0ahUKEwjEttb-pqf-AhXsRTABHXKKDIIQ4dUDCAk&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIOCC4QgAQQsQMQxwEQ0QMyCwgAEIoFELEDEIMBMgUIABCABDILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEOggIABCPARDqAjoICC4QjwEQ6gI6BAgAEAM6CAgAEIoFELEDOgUILhCABDoRCC4QgAQQsQMQgwEQxwEQ0QNQsBFYxhpg0xxoAHAAeACAAaAIiAHMG5IBBzUtMS4xLjKYAQCgAQGwAQo&sclient=gws-wiz')
    //cy.go('back')
    cy.go(-1)
  })
  it.only('Navegar hacia adelante', () =>{
    cy.visit('https://www.google.com/')
    cy.visit('https://www.google.com/search?q=platzi&source=hp&ei=ZzE4ZITnDuyLwbkP8pSykAg&iflsig=AOEireoAAAAAZDg_dxJIhd8fS4mLPsvhou73mK5F8U6i&ved=0ahUKEwjEttb-pqf-AhXsRTABHXKKDIIQ4dUDCAk&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIOCC4QgAQQsQMQxwEQ0QMyCwgAEIoFELEDEIMBMgUIABCABDILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEOggIABCPARDqAjoICC4QjwEQ6gI6BAgAEAM6CAgAEIoFELEDOgUILhCABDoRCC4QgAQQsQMQgwEQxwEQ0QNQsBFYxhpg0xxoAHAAeACAAaAIiAHMG5IBBzUtMS4xLjKYAQCgAQGwAQo&sclient=gws-wiz')
    cy.go('back')
    //cy.go('forward')
    cy.go(1)
  })
})