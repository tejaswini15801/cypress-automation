/// <reference types="cypress" />

// describe('My first test suite', function () {

//     it('My FirstTest case', function () {
//         //it takes two methods
//         cy.intercept({ // requestobject
//             method: 'GET',
//             url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'   // once this call is made on browser, cypress waits and know whether the user wants real response or we need to mock a response, as we are seeing the mocking of response. here the mocked response is saved in responseobject
//         },

//             { // response object
//                 // whatever we want to mock we will write it here
//                 statusCode: 200,
//                 body: [
//                     {
//                         "book_name": "RestAssured with Java",
//                         "isbn": "LSA",
//                         "aisle": "2303"
//                     }]
//             }).as('bookretrivals') // referring using as method

// cy.get("button[class='btn btn-primary']").click()
// cy.wait('@bookretrivals')  // this is to make cypress wait until the data is rendered, and to resolve the promise

//     })

// })

// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
    cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
 
     {
         statusCode : 200,
         body : [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"    }]
          
     }).as('bookretrievals')
     cy.get("button[class='btn btn-primary']").click()
     cy.wait('@bookretrievals').then(({request,response})=>
     {
         cy.get('tr').should('have.length',response.body.length+1)
      
     })
     cy.get('p').should('have.text','Oops only 1 Book available')
 
 
 
     //length of the response array = rows of the table
 
 
 
 
 
 
 
 
 
 
})
 
})
