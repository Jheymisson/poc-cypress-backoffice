/// <reference types="cypress" />
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../pageobjects/LoginPage';
import HomePage from '../pageobjects/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const url = Cypress.env('BASE_URL');

And('preencha o login com {string}', (user) => {
  loginPage.typeUser(user);
});

And('preencha a senha com {string}', (pass) => {
  loginPage.typePassword(pass);
});

And('não preencho as credências do login e senha', () => {
  loginPage.notFillFields();
});

When('aciono o botao do login', () => {
  loginPage.triggerLoginButton();
});

Then('é exibido a tela Home com o usuário {string}', (nome) => {
  homePage.validateUsername(nome);
});

Then('é exibido a mensagem {string} e {string}', (errorUser, errorPass) => {
  loginPage.userErrorMenssage(errorUser);
  loginPage.passwordErrorMenssage(errorPass);
});

Then('é exibido {string} na tela de login', (error) => {
  loginPage.validErrorToast(error);
});

Then('é exibido {string} de usuário obrigatório', (errorUser) => {
  loginPage.userErrorMenssage(errorUser);
});

Then('é exibido {string} de senha obrigatória', (errorPass) => {
  loginPage.passwordErrorMenssage(errorPass);
});

And(
  'tento acessar diretamente a tela Home do backoffice com o Path {string}',
  (pathClients) => {
    cy.visit(`${url}${pathClients}`);
  },
);

Then('sou direcionado novamente para a tela de Login', () => {
  loginPage.validatePageLogin();
});
