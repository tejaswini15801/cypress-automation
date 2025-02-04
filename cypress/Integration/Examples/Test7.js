describe('Practice page checkbox suite', function()  
{

it('practice page handle mouse hover', function() {


// mouse hover case
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//cy.get(".mouse-hover-content").invoke('show') //show is the jquery function which is used to show the hidden elements as the cypress does not support such function which can perform this type of functionality. invoke() is a Cypress command that wraps and executes jQuery methods.
cy.contains('Top').click({ force: true })
cy.wait(500)
cy.url().should('include','top')

//Cypress has na ability to click on hidden element, here cypress uses one command which forcefully click on the hidden button
// i.e. herein this case on hover we see two options, so instead of checking for the options displayed on hover, this cypress command will forcefully click directly on top
// so the above line of code can be written as 
// cy.contains('Top').click({ force: true })
// this is done without even opening the popup

})

})
