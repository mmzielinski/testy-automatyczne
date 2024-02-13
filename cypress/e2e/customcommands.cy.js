/// <reference types="cypress" />

import {login, password} from "../fixtures/loginData.json"

describe("Custom Commands", () => {
    it("Logowanie do strony", () => {
        cy.login(login, password);
    })
})