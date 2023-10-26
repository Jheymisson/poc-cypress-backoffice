/// <reference types="Cypress" />

import UserMenuElements from '../elements/UserMenuElements';

const userMenuElements = new UserMenuElements();

class UserMenuPage {
  logoutUser() {
    cy.get(userMenuElements.menuButton())
      .should('be.visible')
      .click({ force: true });
    cy.get(userMenuElements.exitButton()).should('be.visible').click();
  }
}

export default UserMenuPage;
