/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements';

const homeElements = new HomeElements();

class HomePage {
  validateUsername(nUser, waite = 2000) {
    cy.wait(waite);
    cy.get(homeElements.validateHome()).should('have.text', nUser);
  }

  validateMessageCreateUser(msg) {
    cy.get(homeElements.sucessMessageCreateUser()).should('have.text', msg);
  }
}

export default HomePage;
