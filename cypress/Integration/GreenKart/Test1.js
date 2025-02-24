// cypress - cypress terminology for test file is "Spec" file
// design a script structure as per the mocha testing standard. "Mocha" is js testing framework recommended by cypress. another is jasmine.
// inside this test suite you can write you multiple test cases using it block in it
// cy is a global command which will help to envoke cypress commands. we don't need to declare it as it comes declared already when we download the node modules
// "Function" - 'describe', 'it' functions are the mocha functions used by cypress. It is a fundamental way of creating reusable blocks of code.
// "0describe" which provides the suite of test cases or group of all the test cases with descriptive name of the suite as "my first test suite" in the below case.
// "it" is used to define the test case bode with name as "my firsttest case" in below case


describe('my first test suite', function()  
{

it('my firsttest case', function()
{
    // test steps
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type("Ca")
    cy.wait(2000)
    // selenium 'get' hit url in browser, cypress 'get' acts like find element
    //cy.get('.product').should('have.length',5)
    //cy.get('.product:visible').should('have.length',4) // should is the assertion on the product, this assertion is to check if there are 4 search results displayed on the website, have.length is the property
    // the test was failing bcoz cypress detected 5 elements whereas there are only 4 elements visible, so for this we need to add 'visible:' word while we ask to highlight the products
    // parent child training
    // cy.get('.products').find('.product').should('have.length',4)
    // cy.get('.products').as('productlocator')
    // cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()
    //cy.contains('ADD TO CART') // this command will select all the "ADD TO CART" on the screen, but we need only 2nd item so in the above code line 'ADD TO CART' command is chained with the parent that's why it will consider on the 2nd item 'ADD TO CART'
    //iterate over an array (here there is array of 4 products)
    // cy.get('.products').as('productLocator')
    // cy.get('@productLocator').find('.product').each(($el, index, $list) => { // each method is used to iterate all the product names in the array of products
    // e1 which means you are starting from the first product
    // const textVeg = $el.find('h4.product-name').text() // as the veg text have 1 kg in it and we need obly the veg name we can use the includes method in js
    // if(textVeg.includes('Cashews'))
    // {
    //     cy.wrap($el).find('button').click()
    // }

    // incorrect
//     cy.get('products').find('product').each($el, indexedDB, $list) ; {

//         const textVeg = ($el).find('h4.product-name').click()
//         if(textVeg.includes('Cashews'))
//         {
//             cy.wrap($el).find('buttons').click()
//         }
//     }

// })


// Assuming this is inside a Cypress test file (typically ending with .spec.js or .test.js)

// Corrected usage of cy.get() and each()
cy.get('@productlocator')  // Adjust the selector according to your HTML structure
  .find('.product')
  .each(($el, index, $list) => {
    cy.wrap($el)  // Use cy.wrap() to wrap the jQuery element
      .find('h4.product-name')
      .invoke('text')
      .then((textVeg) => {
        if (textVeg.includes('Cashews')) {
          cy.wrap($el).find('button').click();  // Click on the element if it contains 'Cashews'
        }
      });
  });

// assertion - to check if the logo text is correctly displayed 
cy.get('.brand').should('have.text','GREENKART')

// this is to print in logs
 cy.get('.brand').then(function(logoelement)
 {
    cy.log(logoelement.text()) // this will print output in text runner
 })
  
 // Alias
//  cy.get('.products').as('productlocator')
//  cy.get('@productlocator')





})

// it('my secondtest case', function()
// {
//     // test steps
// })
})
