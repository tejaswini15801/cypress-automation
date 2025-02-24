
beforeEach(()=>{
    // runs once before all the tetsts in the block
    cy.fixture('example').then(function (data) {
        this.data = data

    })
})