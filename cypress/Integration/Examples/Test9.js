/// <reference types="cypress" />
// // to get all the iframe methods autosuggestions
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('frames test', function(){
    it('Handling frames', function(){
// frame - A html document embedded in the another html document
// to switch to mini html documet in frame we need to make cypress understand that whatever operation we are performing are not the part of main html, it is the part of frames
// we need to install a plugin using - npm install -D cypress-iframe, 
// and then we need to import it in this file using - import 'cypress-iframe'

cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
//to load a frame in cypress using the iframe commands
cy.frameLoaded('#courses-iframe')

cy.iframe().find("a[href*='mentorship']").eq(0).click();

//cy.iframe().find("h1[class*='pricing-title']").should('have.length', 1); - gave incorrect result
cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2);

})

})



