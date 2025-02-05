// after import folder install cypress with "npm install cypress --save-dev" command																									
// to open the cypress automatically go to the node modules folder and then inside the bin folder there will be "cypress" executable file																									
// copy the path of that file																									
// paste the path n terminal and then run the "cypress open" command																									
// here the cypress screen will open where e2e testng and component testing sections will be shown																									
// E2E testing is for QA and Component testing is mainly for devs to perform intergration testing or unit testing																									
// as a QA focus on E2E, so select it																									
// Create new folder and a sub folder under cypress																									
// then create a text/ spec file to write the test scripts																									
// now how will the script and the test runner will connect ?																									
// to execute the scripts written in the vs code, in the cypress test runner through the browser there is one connector js file added by default while we do the e2e setup in the testrunner																									
// Through this we can make the specific folder/file's script to execute in the test runner																									
// In the cypress.config.json file, we need to add the file location which we want to execute																									
// this will happen by using a command called "specPattern: 'cypress/Integration/Examples/*.js"																									
// this will make test runner to understand what test files to run																									
// if the folder has multiple files then to execute them sequencially we need to add "*.js" in the end.																									
																									
																									
// Electron browers ~ for rendering the test execution, it yeilds high performance as compared to chrome, although it is 99.99% similar as chrome just we can not save bookmarks n all																									
// cypress by default bundles the electron browser. in general we need to download it separately but if cypress is installed no need to install it.																									
// we can select the test browser from three differnet places ~ one is from the test runner it self, second one is from the dropdown in top right corner while test execution, and third is by using command line in terminal																									
// When you want to execute all the test cases files inside the cypress folder then simply use "run" command																									
																									
// Executions																									
// There are two types of executions																									
// Headmode - browser will open and able to see the execution																									
// Headless - browser will not open, it will be handled internally by calling the APIs of the browser. Test will still run but we cannot see the browser envokation																									
// headless brings down the excecution time of test case																									
// Advantage - by default it gives this option to do headless execution. However in other frameworks like selenium or protractor we need to write atleast 4 lines of code																									
// and by default it always runs in electron browser and electron is a underhood of chrome browser																									
// To run the headless and headed test case using the command line is required when we integrate this whole framework into CI tool called "Jenkins" as jenkins don't have the testrunner																									
// fixtures - test data (excel, google sheet)																									
// integration - write test cases																									
// plugins - Listeners (To inject some customized options to browser to accept some certificates before envoking the browser)																									
// e.g. on browser envoke do these steps on test failure																									
// we can write that before or after the event is happening, so the control will be in the index file																									
// support - can write customized commands or reusable methods																									
// We can define the reusable methos in other folders as well but cypress is telling to define it in support																									
// as defining in the support folder will make that method directly available in the test scripts, in this case there is no need to import the method again in the respective file																									
// the test case will scan the support folder by default so no need to import the reusable method																									
// while defining the reusable method in other than support folder can cause to import it in every file it is called																									
// test website - https://rahulshettyacademy.com/seleniumPractise/#/																									
// cypress supports css selectors only																									
																									
// CSS SELECTORS																									
// CSS selectors can be written in multiple ways																									
// if id is present then by using id we can write the id selector as - #idname or tagname#idname																									
//To build css selectors using class name - .classname																									
// if multiple elements with same class name then we can write it using the tagname as to identify uniquely - "tagname.classname" (tagname is optional)																									
// we can write the css by using the attributes as well																									
// it can be written as ~ tagname[attribute=value] // tag name is optional\																									
// how to identify the tagname and classname - when we inspect and hover over any field there is one popup shown where the tagname.classname will highlight (ref - https://prnt.sc/m_7RmSspyTZF)																									
// to confirm the child css belongs to which parent css then simply click on the arrow beside the parent css then if the child css closes then that is it's parent css																									
// we can also get the css selectors from the cypress test runner (that's the beauty of cypress)																									
// clicking on the icon beside the website link opens up the css provider text field - where we can simply select the spy-locator and copy the css it provided// now clicking on any element of the website gives the css for the respective field on the text field above (Ref - https://prnt.sc/O-s6GywaNZZl)																									
// cypress only supports css																									
// now i can create the css using the html properties by normal inspect throught the chropath plugin on the website																									
// Also by the cypress plugin i.e. selector playground																									
// While running the test case the main advantage is - it's like a time traveller which means we can go back on each step the test has executed and see the details like why it is failed																									
// due to this we can know on what action it is failing along with the reason. // not any other tool provides this // reason to love cypress																									
// We can see what happened on every step with screenshot and error message in cypress																									
																									
																									
// when we are using the jQuery element e.g $el to use in cypress commands as "cy.wrap($el)"																									
// Cypress is asynchronous in nature and there is no guarantee in sequence of execution, but cypress takes care of it																									
// promise comes in rejection, resolved and pending																									
// this promise is exists in the test scripts due to the asynchronous behaviour of some functions as click() for example, the click action needs wait till the 																									
//actionalble field is visible (many cases are there where the button are disabled or not visible or the page takes time to  load any condition is possible!) 																									
//so for such asynchronous behavious of the functions we need to use then(). When the cypress asynchrous functions are used then no need to mention the then() 																									
//every time but it is mandatory to mention when the function is out of cypress or not supporting cypress																									
																									
// to check if the promise is resolve or not i.e using .then() method if we concatinate this with the promise, using this 'then()' will wait until the promise is resolved then only it moves to the next step																									
// using frequent then() in each line of code is noisy(but it is the part of demonstration) so the cypress has removed this and has took care internally so we can write the code in synchroous manner only with out using then																									
// this asynchronous behavior is taken care in the backend by cypress																									
// When we concatinate the cypress command with the another cypress command (e.g. cy.get('Products').find('product)) in this e.g. get and find both are cypress commands so no need to handle the promise as the next command is handling it internally																									
// However, when the non cypress command are being used then that commands should be satisfied. for that we can use then after it (e.g.cy.get('.brand').then(function(logoelement))																									
// text() is not a cypress command so when we use it we need to add then()																									
// Non-cypress commands cannot resolve promise by themselves. We need to manually resolve it by then()																									
// "To use a certain keyword multiple times normally we define variable and normally call it																									
// but here in cypress to make this happen there is one function called as(), as is short form of alias()																									
// .as('abc')																									
// then just call @abc every time we need it"																									
// if we use the js command console.log() in cypress it will execute and print the output in the console in non sequential manner																									
// if we use the then function then the same text we gave in console log will print sequentially																									
// to print in the console use console.log() and to print in test runner use cy.log()																									
																									
// we can do the multiple assertions in single line only
// if we do the single assertion in a line wit should word then we can extend it by using .and() function no need to use should() again
//can use .click() as well but check is more appropriate and be.checked here is a behavior have we cannot use should have, we can use have when we are doing assertion to check the property, also we are doing assertion here
// behavioral assertion - use be.
// property assertion - use have.value  (value is the attribute for any defined field in the xpath)

// cypress auto accepts all tle alerts and popups 
// also have the capability to handle browser events. 
// cypress have control to manipulate browser DOM(i.e. all the html)- (uniqueness of cypress as selenium can't do it)
// comparing two strings in mocha - expect(str).to.equal('Hello , share this practice page and share your knowledge')
// on methods take two arguments. first argument ~ "window:alert" is a event which is handled by cypress internally and will not visible in UI. second argument ~ will the output got after firing the first argument

// cypress have the capability of firing browser events
// window alert is one of the browser event and will be triggered when alerts are opened or using this event we can fire any alert
// so we are firing to that event through cypress to get access to that alert
																									
// Child tab case
// cypress cannot switch to the new tab by default, we need to make some twick
// we cannot switch to new window
// only way to handle is - making appplication to load this page instead in the separate new tab we can load the new tab in same tab itself.
// target= blank, is a attribute that opens the links in new tab everytime
// when it opens in the new tab cypress cannot handle it
// cypress uses jquery
// using this jquery we can remove that target attribute at run time and envoke the dom(page) again, which means we are rebuilding the page again
// as the attribute which was performing the action of opening the new tab is removed now, on performing click operator the link will open in the same tab
// this is how this mechanism works to handle the child windows 
// and that jquery function is "remove" which we need to use i.e removeAttr
																									
// cypress do not supports cross origins
// i.e. cypress does not goes from the original domain to new domain (this for security purpose)
// so before running cypress to another new domains we need to tell cypress i.e cy.origin and you need to identify it 
// using this will let cypress know that we are intentionlly changing domain
// so this cy.origin takes two parameters, 1st - url and 2nd - function and most important
// whatever we have to do the actions on this domain should be wrapped in this 2nd  argument only

// Test 5 understanding 
// 1. How to make child windows handle in own tab
// 2. if we change the tab for the new domain then how to handle it with origin method

// Table 
// in css the syntax to write css for the nth index i.e. the number of column in the table and can be written as -"parent class name child class name:nth-child(2)"
																									
// mouse hover popup
// the cypress do not have any function that satisfy this functionality, but there is one jquery method by which it is possible to test this.
// that jquery method is "Show()""
	
// cypress has an ability to click on hidden element as well, it is not visible but cypress handles it internally
//Cypress has na ability to click on hidden element, here cypress uses one command which forcefully click on the hidden button
// i.e. herein this case on hover we see two options, so instead of checking for the options displayed on hover, this cypress command will forcefully click directly on top
// so the above line of code can be written as 
// cy.contains('Top').click({ force: true })
// this is done without even opening the popup
		
// cypress has ability to manipulate the DOM
// you can travers to siblings with next() and it works only on get
// mouse hover events are not supported in cypress, alternatively use jquery or force click
//invoke() is a Cypress command that wraps and executes jQuery methods.
																									
// to open new tab 
// we need to use the jquery method to get the value of attribute in cypress, as cypress does not support this kind of action.
// it is "prop()" method, which will help to get the property value i.e. attribute value
// we use origin when we are intentionally changing the domain from the original domain.
// origin method takes two parameters, first is the url where we are navigating and 2nd can be a nameless function in which we  give the main actions we are going to perform on the new domain
// before performing any action on the new domain we need to land on that new domain using visit

// frame - A html document embedded in the another html document
// to switch to mini html documet in frame we need to make cypress understand that whatever operation we are performing are not the part of main html, it is the part of frames
// we need to install a plugin using - npm install -D cypress-iframe, 
// and then we need to import it in this file using - import 'cypress-iframe'- importing will give the autosyggestions while writing the commands
																							
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									