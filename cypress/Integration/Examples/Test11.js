describe('End to end e-commerce test', function () {

    before(function(){      // so with the help of before we are isolating the set of configuration from the actual texts. also there is is after hook where we can close all the data base connections.
        // runs once before all the test in this block
        cy.fixture('example').then(function(data){ // the scope of this block is only inside it, so to handle this simply attach this data to class instance variable i.e. this, this refers to the current file object. so it will be this.data will be globally available. Any property we attach to this, that keyword is accessible across file.
            this.data=data
            console.log(data, "fffffff")

        }) // it will search the data in the fixtures folder and yeild a data
        // This fixture method will read the entire json and convert that data content into javascript object. so here data is a variable where all the this object will be stored
        // so using this data i can drive that data here
        // this is just reloading the data
    })

    it('Submit order', function () {
        
        const productName = this.data.productName
        Cypress.env('url')
        cy.visit (Cypress.env('url')+('/loginpagePractise/#'))
        cy.get("#username").type(this.data.username);                                      //.type("rahulshettyacademy")
        cy.get("#password").type(this.data.password);                                      //.type("learning")
        cy.contains("Sign In").click()
        cy.contains("Shop Name").should("be.visible")
        cy.get('app-card').should("have.length", 4)
        cy.get('app-card').filter(`:contains("${productName}")`)                // :contains is jquery method- to call a var in this method we need to add $ sign before the var name and when we use var name we cannot defin it inside the quotes we must replace the quotes with `` sign in this case
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                // this method is used to get the yeilded element after resolving the promise, it is a locator
                cy.wrap($element).contains('button', 'Add').click() // contains method normally check for the given argument in whole screen but here we are restricting it by adding this in wrap method

            }
            )

        cy.get('app-card').eq(2).contains('button', 'Add').click()
        cy.contains('a', 'Checkout').click()      // a is anchor in which the checkout class is defined
        let sum = 0
        cy.get('tr td:nth-child(4) strong') //we got the locator
            .each($e1 => {
                //₹. 100000
                const amount = Number($e1.text().split(" ")[1].trim())
                sum = sum + amount

            }) //this is to loop through each element
            .then(function () {

                expect(sum).to.be.lessThan(200000)

            })
            cy.contains('button','Checkout').click()
            cy.get("#country").type("India")
            //cy.wait(5000)
            cy.get('.suggestions>ul>li>a').click()
            cy.get(".btn-success").click()
            //cy.wait(5000)
            cy.get('.alert').should('contain',"Success!");
    })


})


