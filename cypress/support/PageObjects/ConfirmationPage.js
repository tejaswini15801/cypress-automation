class ConfirmationPage{
    submitFormDetail(){
        cy.get("#country").type("India")
        cy.get('.suggestions>ul>li>a').click()
        cy.get(".btn-success").click()
        
    }
    getAlertMessage(){
        return cy.get('.alert')

    }
}

export default ConfirmationPage