/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/// <reference types="cypress" />
import { Before } from 'cypress-cucumber-preprocessor/steps';

const url = Cypress.env('BASE_URL');

Before(() => {
  cy.visit(url);
});
