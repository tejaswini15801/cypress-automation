import HomePage from "../../support/PageObjects/HomePage";
import ShoppingPage from "../../support/PageObjects/ShoppingPage";

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
});class ShoppingPage {
    addFirstProductToCart() {
        cy.get(':nth-child(1) > .card > .card-body > .w-10').click();
    }

    proceedToCheckout() {
        cy.get(':nth-child(4) > .btn').click();
        cy.get('.subtotal > ul > :nth-child(3) > .btn').click();
    }

    applyCoupon(couponCode) {
        cy.get(':nth-child(2) > .btn').should('have.text', 'Apply Coupon');
        cy.get('.form-group > .input').clear();
        cy.get('.form-group > .input').type(couponCode);
        cy.get(':nth-child(3) > .ng-star-inserted').click();
    }

    placeOrder() {
        cy.get('.btnn').click();
    }

    verifyOrderDownloadButton() {
        cy.get('tbody > :nth-child(4) > .btn').should('have.text', 'Click To Download Order Details in CSV');
    }
}

export default ShoppingPage;