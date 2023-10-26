

Cypress.Commands.add('senhaGet', (email) => {
    const urlGetnada = Cypress.env('URL_GETNADA');
    return cy.session(() => {
        cy.visit('https://getnada.com/');
        cy.xpath('//*[@id="__layout"]/div/div/div[2]/nav/div/div/ul[1]/li[1]/button').type(email);

    })


})