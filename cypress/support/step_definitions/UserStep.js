/// <reference types="cypress" />
import { And, Then, When } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../pageobjects/LoginPage';
import HomePage from '../pageobjects/HomePage';
import UserPage from '../pageobjects/UserPage';
import SideMenuPage from '../pageobjects/SideMenuPage';
import MenuUserPage from '../pageobjects/UserMenuPage';
import MongoDbHelperActions from '../pageobjects/helpers/MongoDbHelperActions';

const loginPage = new LoginPage();
const homePage = new HomePage();
const userPage = new UserPage();
const sideMenuPage = new SideMenuPage();
const menuUserPage = new MenuUserPage();

const mongoDbHelperActions = new MongoDbHelperActions();

let cpfUser;
let senhaGetNada;

And(
  'realizo o login no Backoffice do Gringots com usuario {string} e senha {string}',
  (user, pass) => {
    loginPage.typeUser(user);
    loginPage.typePassword(pass);
    loginPage.triggerLoginButton();
  },
);

And('aciono o botão Criar Usuário', () => {
  sideMenuPage.triggerButtonMenuUser();
  userPage.triggerButtonCreateUser();
});

And('informo Nome, CPF e E-mail', () => {
  userPage.typeFullname();
  userPage.typeCPF();
  userPage.typeEmail();
});

And('seleciono o {string}', (role) => {
  userPage.selectRole(role);
});

When('aciono o botão de criar usuário', () => {
  userPage.triggerCreateUserButton();
});

Then('é exibido a mensagem {string}', (msg) => {
  homePage.validateMessageCreateUser(msg);
  menuUserPage.logoutUser();
});

When('crio um novo usuário', () => {
  sideMenuPage.triggerButtonMenuUser();
  userPage.triggerButtonCreateUser();
  userPage.typeFullname();
  cpfUser = userPage.typeCPF();
  userPage.typeEmail();
  userPage.selectRole('Administrador');
  userPage.triggerCreateUserButton();
});

Then('faço a ativação desse novo usuário', () => {
  mongoDbHelperActions.getUers();
});

And('valido o status "PEDING" na base de dados', () => {
  usuario = mongoDbHelperActions.getUers(cpfUser);
  
})

// And('valido o status {string} na base de dados', (status) => {});
When('conecto ao mongo', () => {

  sideMenuPage.triggerButtonMenuUser();

  cy.senhaGet('tst.qa.34534@vomoto.com');
  
  // mongoDbHelperActions.getUsers('341.208.129-95');

  // cy.get( '@idUser' ).then( (id) => { 
  //   mongoDbHelperActions.getToken(id);
  // })

  // cy.get ( '@tUser' ).then ( (token) => {
  //   cy.log(token, 'Token do usuário');
  // });

  
});
