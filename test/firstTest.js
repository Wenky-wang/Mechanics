const {Builder, By, Key} = require('selenium-webdriver');


// ## Assertion ##
// method 1: node assertion
const assert = require("assert");
// method 2: Chai assertion
// npm install chai
// a popular assertion library for node.js. Have three functions for assertions: should, expect, assert
// here we look at should
var should = require("chai").should();


// async function example() {
//     let driver = await new Builder().forBrowser('chrome').build();

//     await driver.get('https://lambdatest.github.io/sample-todo-app/');

//     // to do
//     await driver.findElement(By.id("sampletodotext")).sendKeys("Learn more", Key.RETURN);


//     // Assertion example
//     let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {  // By.xpath is to find by path, the path here is the last element of all <li>
//         return value;
//     })
//     // use node assertion
//     assert.strictEqual(todoText, "Learn more");  // try changing them to a wrong match and see the result
//     // chai assertion
//     todoText.should.equal("Learn more");


//     // close the browser
//     // await driver.quit();
// }
// example()



// ## Test framework ##
// -- popular javaScript test framework include Jasmine and Mocha
// -- two core functions of Mocha: describe() and it()
// -- describe() group tests together; it() is inside describe() and each it() represent one test case

// -- another noticable difference is: in above way we use node tests/firstTest.js; 
// -- now using mocha, we should do npx mocha --no-timeouts 'tests/*.js', the above doesn't work any longer, so do the code runner
// -- of course the npx mocha --no-timeouts 'tests/firstTest.js' works too lol, to execute single test case or sth
// -- mocha has default 2 sec timeout; and this code runs all mocha framework in one folder

// -- ANDDDD, if we change the folder name to 'test', we just need to run npx mocha --no-timeouts
// -- ALLLLSO, if we go to package.json and change "test": "echo \"Error: no test specified\" && exit 1", to "test": "npx mocha --no-timeouts", in terminal we can run 'npm test' to execute tests
describe("add to do tests", function () {

    // it block
    it("add a li to table", async function() {  // no name for the function
        let driver = await new Builder().forBrowser('chrome').build();
    
        await driver.get('https://lambdatest.github.io/sample-todo-app/');
    
        // to do
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn more", Key.RETURN);
    
    
        // Assertion example
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {  // By.xpath is to find by path, the path here is the last element of all <li>
            return value;
        })
        // use node assertion
        assert.strictEqual(todoText, "Learn more");  // try changing them to a wrong match and see the result
        // chai assertion
        todoText.should.equal("Learn more");
    
    
        // close the browser
        await driver.quit();
    });

});


