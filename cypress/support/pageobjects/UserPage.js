/// <reference types="Cypress" />

import { faker } from '@faker-js/faker/locale/pt_BR';

import UserElements from '../elements/UserElements';

const userElements = new UserElements();

class UserPage {
  triggerButtonCreateUser() {
    cy.get(userElements.buttonCreateUser()).contains('Criar Usuário').click();
  }

  typeFullname() {
    const firstNameUser = faker.name.firstName();
    const lastNameUser = faker.name.lastName();
    cy.get(userElements.fullname()).type(`${firstNameUser} ${lastNameUser}`);
  }

  typeCPF() {
    const cpf = cpf.generate();
    cy.get(userElements.cpf()).type(cpf);
    return cpf;
  }

  typeEmail() {
    const email = faker.random.alphaNumeric(5);
    cy.get(userElements.email()).type(`tst.auto${email}@vomoto.com`);
  }

  selectRole(role) {
    switch (role) {
      case 'Administrador':
        console.log('Selecionado Administrador');
        cy.get(userElements.role())
          .should('have.text', 'Selecione a permissão do usuário')
          .click({ force: true });
        cy.get(userElements.roleAdmin())
          .should('have.text', 'Administrador')
          .click({ force: true });
        break;
      case 'Espectador':
        console.log('Selecionado Expectador');
        cy.get(userElements.role())
          .should('have.text', 'Selecione a permissão do usuário')
          .click();
        cy.get(userElements.roleExpect())
          .should('have.text', 'Espectador')
          .click();
        break;
      default:
        console.log(`Sorry, we are out of ${role}.`);
    }
  }

  triggerCreateUserButton() {
    cy.get(userElements.createUserButton()).click();
  }
}
export default UserPage;
