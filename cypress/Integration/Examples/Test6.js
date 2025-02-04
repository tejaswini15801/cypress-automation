describe('Practice page checkbox suite', function()  
{

it('practice page handle child tab case', function() {


// table 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {

    const text = $e1.text()
    if (text.includes("Python"))
    {
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)    // here index is generic as, we are searching for the index having python, in the background if the we get the index count to pull that index text we can simply use index word as at start we do not know the index count 
        {
            const pricetext = price.text()
            expect(pricetext).to.equal('25')
        })

        // using eq we can pull the exact index data from the loop
        // next() take to the sibling column i.e to the cell infront of the cell having python text.
        // again the next is jquery object, due to asynchronous behavior it creates a promise, we need to resolve this using the cypress adding then() method.
    }
     
})

})

})
