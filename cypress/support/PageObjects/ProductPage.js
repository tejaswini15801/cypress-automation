import CartPage from "../../support/PageObjects/CartPage"

class ProductPage {
 
    // Method1
    pageValidation(){
        cy.contains("Shop Name").should("be.visible")
    }

    // Method2
    getCardCount(){
        return cy.get('app-card')
    }

    selectFirstProduct(){
        cy.get('app-card').eq(2).contains('button', 'Add').click()
    }

    goToCart(){
        cy.contains('a', 'Checkout').click()
        return new CartPage()
    }

    // method3
    selectProduct(productName){
    cy.get('app-card').filter(`:contains("${productName}")`)                
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('button', 'Add').click() 

            }
        )
    }
}

export default ProductPage