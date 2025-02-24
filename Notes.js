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
	
// calender tests
// we can click on any field based on the text in cypress
// in this month's array this css have 12 matching elements so we can take each month depending on the index value starting from 0th index
//we are using -1 above bcoz the array start from 0th index
// need to use number constructor from js as the monthNumber we usedis in string so to convert it in number we must first convert it to number by wraping that element
																									
// End to end e-commerce test
// :contains is jquery method
// this method is used to get the yeilded element after resolving the promise, it is a locator
// :contains is jquery method- to call a var in this method we need to add $ sign before the var name and when we use var name we cannot defin it inside the quotes we must replace the quotes with `` sign in this case																									
																									
// Fixtures - to load the external file data in the spec files
// for this all the files should be loaded inside the fixtures folder
// by default cypress searched in the fixtures folder when we try to load the data
// it will search the data in the fixtures folder and yeild a data
// This fixture method will read the entire json and convert that data content into javascript object. so here data is a variable where all the this object will be stored
// so using this data i can drive that data here																								
// the scope of this block is only inside it, so to handle this simply attach this data to class instance variable i.e. this, this refers to the current file object. so it will be this.data will be globally available. Any property we attach to this, that keyword is accessible across file.																									
// this is just reloading the data
// before annotation - this is a hook which will execute before any test it runs
// it run once before all tests
																								
// Global configurations for cypress
// the cases where system takes time to load data like while searching and uploading file. to handle this in one go we can define the global time out in cypress config file where it will be accessible across the project
// for this global configuartion for diffenent functionalities the commands are given in the settings module in cypress
// once we define this in config file we need to call it where ever needed using "cypress.config('<command>',<value>)"																							
// we can give the default timeout value in the config file for the respective command otherwise can overwrite in the value where ever needed in file																							
																									
// Page object design pattern - famous pattern across test industry
// having the locators hardcoded is also not a good approach, so we should drive this from external places
// Create a folder and respective page files under it in the "Support" folder.
// all the locators info in this will act as a global source of the different object being called across the project files
// creating obect for the class created in the support folder so that we can access any method from that class                 
// we cannot use "this.data.username" here as this should be mentioned only in test case we cannot use it here also we cannot drive the test data in page object files																								
// so we need to make this data parameterized
																								
// we can create custom commands - so that we can wrap reusable codeas one command
// so this used when we have the common set of code in multiple projects, for that we can generalise it using custome command 
// steps - 
// 1. copy the code
// 2. go to support directory
// 3. go to commands.js file under the same directory
// 4. tell cypress you are gpoing to create new command in below way
// Cypress.Commands.add('<CommandName>', ()=>{ <Code> })
// in this first argument will be command name and second argument will be where actual code goes in 																									
// So i can use this command where ever it is needed using "cy.<CommandName>"
// when we define it and is the npt part of cypress command the cypress will by default check in the command file
// it is kind of reusable method
// this is the second method to create the reusable codes
// first is by creating page objects																									
																									
// CAse 1 - if we want to pause the test in middle of execution 
//cy.pause()- can pause the execution in the test runner until we click on the resume button	

// case 2 - if we can to inspect in middle of execution 
// cy.pause()

// cy.log() - at run time it will create new step and can print data in the logs

// Assertion test data should go from the actual test. only page objects and their relevant method action should come from page object files
// whenever we create object for any class we need to make sure that the class is imported

// without importing page class in the spec file cypress will not pick up you function 																								
																									
// Environmental variables - 
// if there are values that i want to set globally and apply to all test cases then instead of  reusing them in all test cases we can write in env. variable, and we can use them across framework
// you will get the default env setting in cypress setting tab																								
// then use this in config file of project - env: {},
// using the we can define any value e.g. url, changing this in config under env, will change across the system
// So if we define the bas url in config to call that we use, Cypress.config('Property value') if durectly declared
// but if use env in config we need to retrive it using "Cypress.env('url')""- changed this in test11 in and it worked:)

//  to run test - by passing the values from terminal as commands	
// To run the test by giving there env variables in command
// command should be as belows
// npx cypress run --spec <spec file path> --env url="<base url>"
// the url we gave in the terminal will have preference over the url we set in the env-config
// this is how we can overwrite in run time
//npx cypress run --spec C:\Users\hb\Cypress\cypress-automation\cypress\Integration\Examples\Test11.js --headed --browser chrome --env url="https://rahulshettyacademy.com"
// similarly we can use userid and password in the fields
// whatever things we overwrite in the cypress framework are highlighted in the color in the setting file of cypress in test rnner
// by this we can identify which are default settings are which we twicked


// integrating mochawesome reporting framework
// by this we get video attached for each test we run
// even if we run 100 tests it will create report for all 100 tests with video
// for that we need to install the framework using "npm i --save-dev cypress-mochawesome-reporter" command
// then to use reporter only add the attribute for reporter in config file
// also we need add a listener in config, in the code line if "on" is mentioned then it is a listener
// why listeners are reuired? --> when the tests are running this reporter has to listen to the test execution whether it is passor fait also it has to capture a video 
// so if add this listener to the setup node events is the place where we can twick the behaviour of the cypress config 
// now after adding listeners we need to register them, this can be done in the support package. (support>e2e)
																								
// to see the reports of all the test cases from the project, we need to create the cypress cloud account where we can create a project and link it with cypress tests by unique project ID, by which i can see all the test results on th edashboard

// All the parameters required in command line run to record the tests in dashboard --> Cypress run-record-key																									
																									
// understanding the scripts in package.json file
// "test": "npx cypress run", finds the executable file from bin
// so when we try to use npm run command in the terminal it goes to package>script object and checks what scripts it has to run  as we give the object name after the npm run command 
// i.e. npm run test (test is object in script)
// headed mode - when the object it "headTest" : "npm cypress run --headed", then we can run this by using command in terminal as "npm run headTest"
// so instead of writing all these commands every time to run the test cases just define it in the package scripts and use just the defined object name to run that test cases.
// e.g = "recordDashboardTest" : "npx cypress run --record --key 1828f5e4-6af4-450a-a424-d808844507a5"																							
// To run specific set of tests	use "GreenKartTest" : "npx cypress run --spec \"cypress/integration/GreenKart/*\""
// so if we want to perform smoke test daily, we use simply that file name in the folder, and it will be written as 																						
																									
// Cucumber BDD integration to framework
// install the BDD cucumber through the install command given on the "https://github.com/badeball/cypress-cucumber-preprocessor"
// BDD format is to wrap the readable code framework to make it more readable
// and the way of language we use in cucumber is termed as gherkin																									
// so the file we create for this is a feature file and definitely have the .feature extension
// This is how the format is followed to write the feature
//Feature: End to end Ecommerce validation - feature name and description
// Scenario: Ecommerce products delivery 
// Given I am on Ecommerce Page -- landing page
// When I am login to the application -- action items
// And I add items to cart and checkout
// And Validate the total price limit
// Then select the country submit and verify Thankyou -- outcome
// under BDD we need to create another code linking folder with same name as of the feature file
// cucumber and mocha are two testing frameworks there are few things which are different but there two compliment each other
// just like the mocha has the anootations like "before" in the mocha for the tests we write
// same way there are the annotaions in cucumber as well before starting the scriot execution.
// to write these annotations we can create the separate file in cucumber
// in cucumber we write the same code just with plan english notations separated with the menthods
// the goal of the section is to integrate cucumber to add a extra feature to our framework, this is imp when the projects with the requirement came for the BDD plan english cucumber features
// we use this keyword when are using the function outside the block	
// we are using function here are this. does not work with anonomous function like the pipe operator "=>" 																							

// parameterize test data using scenario outline and tags to group 
// we can drive the external data using cypress fixtures, without cypress fixtures we can also drive the data from feature files using pure cucumber terminologies																								
// giving the data in table format in the feature file on the login step, cucumber considers this as a data table
// these tables are recognized by 0 and 1 indexes, which means if i want the data of first row then i'll call it in js file from feature file as [1][0] which means 1st row and first column 

																							
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									
																									