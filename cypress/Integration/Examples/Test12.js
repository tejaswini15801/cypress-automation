import HomePage from "../../support/PageObjects/HomePage"

describe('End to end e-commerce test', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new HomePage()

        })
    })

    it('Submit order', function () {

        const productName = this.data.productName
        
        this.homepage.goTo(Cypress.env('url')+('/loginpagePractise/#'))
        const ProductPage = this.homepage.login(this.data.username, this.data.password)

        ProductPage.pageValidation()
        ProductPage.getCardCount().should("have.length", 4)
        ProductPage.selectProduct(productName)
        ProductPage.selectFirstProduct()
        const cartPage = ProductPage.goToCart()
        cartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.be.lessThan(200000);
        })
        const confirmationPage = cartPage.checkoutItems()
        confirmationPage.submitformDetails()
        cy.wait(6000)
        confirmationPage.getAlertMessage().should('contain', "Success");

    
    })


})


