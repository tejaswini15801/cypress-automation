class HomePage
{

    goTo()
    {
        cy.visit(url)
    }


login(username, password)  // passing two arguments in this login method as the this.data will not work here 
{
    cy.visit('https://rahulshettyacademy.com/loginpagePractise/#')
    cy.get("#username").type(username);                // we cannot use "this.data.username" here as this should be mentioned only in test case we cannot use it here also we cannot drive the test data in page object files                 
    cy.get("#password").type(password);                // so we need to make this data parameterized
    cy.contains("Sign In").click()
    
}

}