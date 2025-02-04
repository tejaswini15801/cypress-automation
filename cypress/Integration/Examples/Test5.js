describe('Practice page checkbox suite', function()  
{

it('practice page handle child tab case', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").invoke('removeAttr','target').click();

    cy.origin("https://www.qaclickacademy.com/about.html", ()=> // whatever actions we need to perform in this new domain Must be wrapped inside this argument, otherwise it will be considered for the original domain
    {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','Welcome to QAClick Academy ');
    })
     

})


})

