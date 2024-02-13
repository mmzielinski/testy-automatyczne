/// <reference types="cypress" />

import Base from "../pages/Base";
import Search from "../pages/Search";
import {searchPhrase} from "../fixtures/searchData.json"

describe("Wpisywanie tekstu w wyszukiwarkę", () => {
    it("Wpisywanie tekstu", () => {
        Base.openHomePage();
        Search.typeSearchPhrase(searchPhrase);
        cy.wait(3000);
        Search.clearSearchPhrase
        Search.typeSearchPhrase(`${searchPhrase} {enter}`);
    })
})