describe('Practice page suite', function()  
{

it('practice page new tab case', function() {


cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.get("#opentab").then(function(e1)
{
    const url = e1.prop('href')
    cy.visit(url) // before performing any action on the new domain we need to land on that new domain using visit
    cy.origin(url, () =>
    {       // need to use origin as we intentionally changing the domain here

        cy.get("div.sub-menu-bar a[href*='about']").click() // to navigate to the child page of the new url i.e. abuot us here

    })
    
    
})

})

})



