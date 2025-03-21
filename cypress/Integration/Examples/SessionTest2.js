/// <reference types="cypress" />

const cypress = require('cypress')
const neatCSV = require('neat-csv')
describe('JWT session', () => {
  it('Add to cart', () => {

    cy.LoginAPI().then(function()
  {
    cy.visit("https://rahulshettyacademy.com/client",
      {
        onBoardLoad :function(window)
        {
          window.localStorage.setItem('token',Cypress.env('token'))
        }
      })
    })
  cy.get(".card-body button:last-of-type").eq(0).click();
  cy.get("[routerlink*='cart']").click();
  cy.contains("Checkout").click()
  cy.get("[placeholder*='Country']").type('Ind')
  cy.get(".ta-results button").each(($el,index,$list)=>
  {
    if($el.text === " India")
    {
      cy.wrap($el).click()
    }
  })
  cy.get(".action__submit").click()
  cy.wait(2000)
  cy.get(".order-summary button").contains('Click To Download Order Details in CSV').click()
  
cy.readFile(Cypress.config("fileServerFolder")+'/cypress/downloads/')
.then(async (text) =>
{
const csv = await neatCSV(text)
console.log(csv)
})

  })
})