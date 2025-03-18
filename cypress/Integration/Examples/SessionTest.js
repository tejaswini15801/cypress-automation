// To create custom command
// to set env token variables (which is globally available)
// how to exceute options for visit method i.e on/before load

/// <reference types= "cypress" />

const { Then } = require("@badeball/cypress-cucumber-preprocessor")
describe('JWT Session', () => {
    it('How to save the login tokens in browser local storage using Cypress', () => {
        cy.LoginAPI().then(() => { 
            cy.visit("https://rahulshettyacademy.com/client/", {
                onBeforeLoad: (window) => {
                    window.localStorage.setItem('token', Cypress.env('token')) // Use 'Cypress' instead of 'cypress'
                }
            });
        });
    });
});
