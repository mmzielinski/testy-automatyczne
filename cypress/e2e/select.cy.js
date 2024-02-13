/// <reference types="cypress" />

import Base from "../pages/Base";
import Home from "../pages/Home";

describe("Testy związane z wybieraniem select", () => {
    it("Kliknięcie w zakładkę Women", () => {
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.wait(1000);
    })

    it("Wybranie filtra 'in stock'", () =>{
        cy.get("#selectProductSort").select("In stock");
    })
})