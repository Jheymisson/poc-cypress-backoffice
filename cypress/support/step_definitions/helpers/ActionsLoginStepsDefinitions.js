/// <reference types="cypress" />
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

import LoginPage from '../../pageobjects/LoginPage';

const loginPage = new LoginPage();

Given('que estou na tela de Login do backoffice', () => {
  loginPage.validatePageLogin();
});
