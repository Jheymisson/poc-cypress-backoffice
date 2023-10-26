/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements';
import ToastElements from '../elements/ToastMessage';

const loginElements = new LoginElements();
const toastElements = new ToastElements();
const url = Cypress.env('BASE_URL');

class LoginPage {
  validatePageLogin() {
    cy.url().should('eq', url);
  }

  typeUser(user) {
    cy.get(loginElements.inputUser()).type(user);
  }

  typePassword(pass) {
    cy.get(loginElements.inputPass()).type(pass);
  }

  triggerLoginButton(waite = 2000) {
    cy.wait(waite);
    cy.get(loginElements.loginButton()).should('have.text', 'Entrar').click();
  }

  notFillFields() {
    cy.get(loginElements.inputUser()).click();
    cy.get(loginElements.inputPass()).click();
  }

  userErrorMenssage(erro) {
    cy.get(loginElements.userErrorField()).should('contain', erro);
  }

  passwordErrorMenssage(erro) {
    cy.get(loginElements.passErrorField()).should('contain', erro);
  }

  validErrorToast(error, waite = 2000) {
    cy.wait(waite);
    cy.get(toastElements.toastMsgLoginInvalid()).should('contain', error);
  }
}

export default LoginPage;
