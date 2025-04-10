import HomePage from "../../support/PageObjects/HomePage";
import ShoppingPage from "../../support/PageObjects/ShoppingPage";

describe("Cypress Studio Demo", function(){

    it("create new transaction", function(){
        /* ==== Generated with Cypress Studio ==== */
        //below code belongs to login page
        cy.visit('https://rahulshettyacademy.com/client');

        //below code belongs to shopping page
        // cy.get(':nth-child(1) > .card > .card-body > .w-10').click();
        // cy.get(':nth-child(4) > .btn').click();
        // cy.get('.subtotal > ul > :nth-child(3) > .btn').click();
        // cy.get(':nth-child(2) > .btn').should('have.text', 'Apply Coupon');
        // cy.get('.form-group > .input').clear('I');
        // cy.get('.form-group > .input').type('India');
        // cy.get(':nth-child(3) > .ng-star-inserted').click();
        // cy.get('.btnn').click();
        // cy.get('tbody > :nth-child(4) > .btn').should('have.text', 'Click To Download Order Details in CSV');
        /* ==== End Cypress Studio ==== */
        
        describe("Cypress Studio Demo", function () {
            it("create new transaction", function () {
                const homePage = new HomePage();
                const shoppingPage = new ShoppingPage();
        
                // Login Page
                homePage.goTo('https://rahulshettyacademy.com/client');
                homePage.login('yourUsername', 'yourPassword'); // Replace with actual credentials
        
                // Shopping Page
                shoppingPage.addFirstProductToCart();
                shoppingPage.proceedToCheckout();
                shoppingPage.applyCoupon('India');
                shoppingPage.placeOrder();
                shoppingPage.verifyOrderDownloadButton();
            });
        });
    })
})