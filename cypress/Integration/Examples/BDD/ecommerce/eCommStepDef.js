import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor" // need to import from the cucumber package
import HomePage from "../../../../support/PageObjects/HomePage"
const homePage = new HomePage()

Given('I am on Ecommerce Page', () => {
    homePage.goTo(Cypress.env('url') + ('/loginpagePractise/#'))
})

When('I am login to the application', function() {
    this.ProductPage = this.homepage.login(this.data.username, this.data.password)
    this.ProductPage.pageValidation()
    this.ProductPage.getCardCount().should("have.length", 4)
})

When('I am login to the application', function(dataTable) {
    this.ProductPage = this.homepage.login(dataTable.rawTable[1][0], dataTable.rawTable[1][1] )
    this.ProductPage.pageValidation()
    this.ProductPage.getCardCount().should("have.length", 4)
})

When('I add items to cart and checkout', function () {
    this.ProductPage.selectProduct(this.data.productName)
    this.ProductPage.selectFirstProduct()
    this.cartPage = this.ProductPage.goToCart()
})

When('Validate the total price limit', function ()   // we can use when at the place of and
{
    this.cartPage.sumOfProducts().then(function (sum) {
        expect(sum).to.be.lessThan(200000);
    })
})

Then ('select the country submit and verify Thankyou', function() // we are using function here are this. does not work with anonomous function like the pipe operator "=>" 
{
    const confirmationPage = this.cartPage.checkoutItems()
    confirmationPage.submitformDetails()
    cy.wait(6000)
    confirmationPage.getAlertMessage().should('contain', "Success");
})