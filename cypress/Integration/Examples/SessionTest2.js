/// <reference types="cypress" />

describe('Purchase order', () => {
    it('End-to-end flow of purchasing the order with UI script', () => {
        cy.LoginAPI().then(() => {
            cy.get(".card-body button:last-of-type").eq(1).should('be.visible').click();
            cy.get("[routerlink*='cart']").click();
            cy.contains("Checkout").click();
            cy.get("[placeholder*='Country']").type("ind");

            cy.get(".ta-results button").each(($el) => {
                cy.wrap($el)
                    .invoke("text")
                    .then((text) => {
                        if (text.trim() === "India") {
                            cy.wrap($el).click();
                        }
                    });
            });

            cy.get(".action__submit").click();
            cy.wait(6000);
            cy.get(".order-summary button").click();
        });
    });
});
