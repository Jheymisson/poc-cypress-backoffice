/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/// <reference types="cypress" />
import { After } from 'cypress-cucumber-preprocessor/steps';

import UserMenuPage from '../../pageobjects/UserMenuPage';

const userMenuPage = new UserMenuPage();

// After(() => {
//   userMenuPage.logoutUser();
//   cy.clearLocalStorage();
// });

// After(
//   {
//     tags: '@loginSemUsuario, @loginSemSenha, @acessoBackofficeSemLogin, @loginSemCredenciais, @loginSenhaIncorreta',
//   },
//   () => {
//     cy.clearLocalStorage();
//     cy.reload();
//   },
// );
