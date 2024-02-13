/// <reference types="cypress" />

import Base from "../pages/Base";
import Home from "../pages/Home";

describe("Zaznaczenie odpowiedniego checkboxa", () => {
    it("Kliknięcie w zakładkę Women", () => {
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.wait(1000);
    })

    it("Kliknięcie w checkboxa", () =>{
        //cy.get("#layered_category_4").check();
        cy.get("#ul_layered_id_attribute_group_1 input").check();
    })
})