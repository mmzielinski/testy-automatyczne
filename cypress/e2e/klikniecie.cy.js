/// <reference types="cypress" />

import Base from "../pages/Base";

describe("Kliknięcie w element na stronie", () => {
    it("Kliknięcie w zakładkę Contact US", () => {
        Base.openHomePage();
        cy.get('a[title="Contact us"]').click();
    })
})