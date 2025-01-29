describe('Practice page checkbox suite', function()  
{

it('practice page checkbox case', function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()


// window alerts

cy.on('window:alert',(str) => // str bcoz i'm 
{
    // comparing two strings in mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
}) //on methods take two arguments. first argument ~ "window:alert" is a event which is handled by cypress internally and will not visible in UI. second argument ~ will the output got after firing the first argument

cy.on('window:confirm',(str) => // str bcoz i'm 
{
    // comparing two strings in mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})


})


})

