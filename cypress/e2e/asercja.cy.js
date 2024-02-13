/// <reference types="cypress" />

import Base from "../pages/Base";
import Home from "../pages/Home";

//pierwszy test
describe("Zaznaczenie odpowiedniego checkboxa", () => {
    it("Kliknięcie w zakładkę Women", () => {
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Kliknięcie w checkboxa", () =>{
        cy.get("#layered_category_4").check();
        cy.get("#layered_category_4").should("be.checked")
        //cy.get("#ul_layered_id_attribute_group_1 input").check();
    })
})

//drugi test
describe("Testy związane z wybieraniem select", () => {
    it("Kliknięcie w zakładkę Women", () => {
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Wybranie filtra 'in stock'", () =>{
        cy.get("#selectProductSort").select("In stock");
        cy.get("#selectProductSort").should("have.value", "quantity:desc");
    })
})

//trzeci test
describe("Wpisywanie tekstu w wyszukiwarkę", () => {
    it("Wpisywanie tekstu #1", () => {
        Base.openHomePage();
        cy.get("#search_query_top").type("TEST");
        cy.get("#search_query_top").should("have.value", "TEST");
        cy.wait(1500);
        cy.get("#search_query_top").clear();
    })

    it("Wpisywanie tekstu #2", () =>{
        cy.get("#search_query_top").type("DUPA {enter}");
        cy.get("p.alert").should("be.visible").and("include.text", "No results");
    })
})