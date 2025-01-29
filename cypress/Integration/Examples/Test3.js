describe('Practice page checkbox suite', function()  
{

it('practice page checkbox case', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') //can use .click() as well but check is more appropriate and be.checked here is a behavior have we cannot use should have, we can use have when we are doing assertion to check the property, also we are doing assertion here
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3']) //need to write the locators which are common for for all checkboxes

    // static dropdown

    cy.get('select').select('option2').should('have.value','option2')

    //dynamic dropdowns

    cy.get('#autocomplete').type('Ind')

    cy.get('.ui-menu-item div').each(($el) => {
        cy.wrap($el)  // Use cy.wrap() to wrap the jQuery element
        
            if ($el.text()==='India') {
              cy.wrap($el).click();  // Click on the element if it contains 'Cashews'
            }
          });
          
// visible - invisible
          cy.get('#autocomplete').should('have.value','India') // assertion to check if the india is present or not

          cy.get('#displayed-text').should('be.visible')
          cy.get('#hide-textbox').click()
          cy.get('#displayed-text').should('not.be.visible')
          cy.get('#show-textbox').click()


// radio button

cy.get('[value="radio1"]').check().should('be.checked')




})


})

