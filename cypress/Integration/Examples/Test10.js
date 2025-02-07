describe('Calendar test',()=>
{
    it('Verify date selection',()=>{

        const monthNumber = "6";
        const date = "15";
        const year = "2025";
        const expectedlist = [monthNumber, date, year];

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.contains("button",year).click()   // we need to make our code dynamic not static
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber)-1).click()    // in this month's array this css have 12 matching elements so we can take each month depending on the index value starting from 0th index
        //we are using -1 above bcoz the array start from 0th index
        // need to use number constructor from js as the monthNumber we usedis in string so to convert it in number we must first convert it to number by wraping that element
        cy.contains("abbr", date).click()

        //Assertion
        //cy.log(cy.get('.react-date-picker__inputGroup').text)
        cy.get(".react-date-picker__inputGroup__input").each(($e1, index)=>
        {
            cy.wrap($e1).invoke('val').should('eq',expectedlist[index])
        })

    })
})