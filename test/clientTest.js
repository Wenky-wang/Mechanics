
// const webdriver = require('selenium-webdriver');
const {Builder, By, until, Key} = require('selenium-webdriver');
const assert = require("assert");

describe("client function tests", function () {

    // it block
    it("client login", async function() {
        // connection
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:3000/');

        // Click the radio button for client login
        driver.findElement(By.className('loginUser-BtnClient')).click();

        // Input the email and password
        driver.findElement(By.className('loginUser-email')).sendKeys('client@test.com');
        driver.findElement(By.className('loginUser-pwd')).sendKeys('123');

        // Click the login button
        driver.findElement(By.className('loginUser-submit')).click();

        // Wait for the URL to change to the client home page
        await driver.wait(until.urlIs('http://localhost:3000/clientHome'), 10000);

        // close the browser
        await driver.quit();
    });

    it("client registration with default one car", async function() {
        // connection
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:3000/clientReg');

        // client info
        driver.findElement(By.name('email')).sendKeys("client66@test.com");
        driver.findElement(By.name('phone')).sendKeys("7780000000");
        driver.findElement(By.name('name')).sendKeys("test");
        driver.findElement(By.name('surname')).sendKeys("testsur");
        driver.findElement(By.name('pwd')).sendKeys("123");
        driver.findElement(By.name('pwd_confirm')).sendKeys("123");

        // input car info
        driver.findElement(By.name('make')).sendKeys("Toyota");
        driver.findElement(By.name('model')).sendKeys("Corolla");
        driver.findElement(By.name('year')).sendKeys("2010");
        driver.findElement(By.name('mileage')).sendKeys("100K");
        driver.findElement(By.name('transmission')).sendKeys("Auto");
        driver.findElement(By.name('drivetrain')).sendKeys("4x2");

        // agree on policy and submit
        driver.findElement(By.name('agree')).click();
        // driver.findElement(By.name('submitBtn')).click();
        const button = await driver.findElement(By.name("submitBtn"));

        // Scroll the page to bring the button into view
        await driver.executeScript("arguments[0].scrollIntoView();", button);

        // Wait for a short time to allow the page to settle
        await driver.sleep(1000);

        // Click the button
        await button.click();

        // url changed
        await driver.wait(until.urlIs('http://localhost:3000/'), 10000);

        // close the browser
        await driver.quit();
    });

});


