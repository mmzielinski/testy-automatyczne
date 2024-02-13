/// <reference types="cypress" />

describe("Mój pierwszt test automatyczny", () => {
    it("Otworzenie strony google.com", () => {
        cy.visit("https://google.com");
    })
})