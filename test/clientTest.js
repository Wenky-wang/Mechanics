const {Builder, By} = require('selenium-webdriver');
var should = require("chai").should();

describe("front end test", function () {

    // it block
    it("test connection", async function() {  // no name for the function
        let driver = await new Builder().forBrowser('chrome').build();
    
        await driver.get('http://localhost:3000/');

        let todoText = await driver.findElement(By.className("loginUser-sign")).getText().then(function (value) {
            return value;
        })
        // chai assertion
        todoText.should.equal("User Login");
    
        // close the browser
        // await driver.quit();
    });

});


