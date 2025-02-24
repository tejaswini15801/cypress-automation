// cypress - cypress terminology for test file is "Spec" file
// design a script structure as per the mocha testing standard. "Mocha" is js testing framework recommended by cypress. another is jasmine.
// inside this test suite you can write you multiple test cases using it block in it
// cy is a global command which will help to envoke cypress commands. we don't need to declare it as it comes declared already when we download the node modules
// "Function" - 'describe', 'it' functions are the mocha functions used by cypress. It is a fundamental way of creating reusable blocks of code.
// "0describe" which provides the suite of test cases or group of all the test cases with descriptive name of the suite as "my first test suite" in the below case.
// "it" is used to define the test case bode with name as "my firsttest case" in below case


describe('my second test suite', function()  
{

it('my firsttest case', function()
{
    // test steps
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type("Ca")
    cy.wait(2000)
   
cy.get('.products').as('productlocator')
cy.get('@productlocator')  // Adjust the selector according to your HTML structure
  .find('.product')
  .each(($el) => {
    cy.wrap($el)  // Use cy.wrap() to wrap the jQuery element
      .find('h4.product-name')
      .invoke('text')
      .then((textVeg) => {
        if (textVeg.includes('Cashews')) {
          cy.wrap($el).find('button').click();  // Click on the element if it contains 'Cashews'
        }
      });
      
  });

  cy.get('.cart-icon > img').click()
  cy.contains('PROCEED TO CHECKOUT').click()
  cy.contains('Place Order').click()






})


})
