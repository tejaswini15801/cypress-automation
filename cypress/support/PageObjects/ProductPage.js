class ProductPage {
 
    // Method1
    pageValidation(){
        cy.contains("Shop Name").should("be.visible")
    }

    // Method2
    verifyCardLimit(){
        cy.get('app-card').should("have.length", 4)
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