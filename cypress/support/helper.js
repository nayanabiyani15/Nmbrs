/// <reference types="cypress" />

import { login, userProfile } from "../fixtures/locators";

Cypress.Commands.add("login", (userName, password) => {
    cy.get(login.userName).clear().type(userName)
        .get(login.password).clear().type(password)
        .get(login.loginButton).click();
});

Cypress.Commands.add("logoff",() =>{
    cy.get(userProfile.icon).click().get(userProfile.signOff).click()

})