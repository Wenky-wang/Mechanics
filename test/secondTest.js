// Parallelization: run multiple tasks at the same time
// within each describe(), the tests are run sequentially;
// to run multiple tests at the same time, we seperate each test into one single .js file, and then npx mocha --no-timeouts --parallel to execute all files at the same time
// note that if we simpy run npx mocha --no-timeouts, all the files are still executed but not in parallel. You can notice the difference in the time for each test the result shows

const {Builder, By, Key} = require('selenium-webdriver');
var should = require("chai").should();

describe("add second to do tests", function () {

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
        // chai assertion
        todoText.should.equal("Learn more");
    
    
        // close the browser
        await driver.quit();
    });

});


