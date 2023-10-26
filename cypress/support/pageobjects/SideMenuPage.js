/// <reference types="Cypress" />

import SideMenuElements from '../elements/SideMenuElements';

const sideMenuElements = new SideMenuElements();

class SideMenuPage {
  triggerButtonMenuUser() {
    cy.get(sideMenuElements.buttonUser()).contains('Usuários').click();
  }
}

export default SideMenuPage;
