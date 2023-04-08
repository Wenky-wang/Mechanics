
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Client Operations', function() {
  this.timeout(30000)
  let driver = new Builder().forBrowser('chrome').build()

  // some url
  const login = "http://localhost:3000"
  const home = "http://localhost:3000/clientHome"
  const storeDetail = "http://localhost:3000/storeDetail"
  const clientReservation = "http://localhost:3000/clientReservation"
  const appointments = "http://localhost:3000/appointments"
  const history = "http://localhost:3000/client/history"

  async function redirectUrl(page) {
    let url;
    switch (page) {
      case "login": url = login
      case "home": url = home
      case "storeDetail": url = storeDetail
      case "clientReservation": url = clientReservation
      case "appointments": url = appointments
      case "history": url = history
    }

    driver.wait(until.urlIs(url))
    driver.navigate().to(url)
    await driver.sleep(1000)
  }

  it ('login', async function() {
    // go to login page
    await driver.get(login)

    // choose type, input email and pwd, then submit
    await driver.findElement(By.name("loginUser-userType")).click()
    await driver.findElement(By.css(".loginUser-email")).sendKeys("client@test.com")
    await driver.findElement(By.css(".loginUser-pwd")).sendKeys("123")
    await driver.findElement(By.css(".loginUser-submit")).click()

    // assert url changed
    redirectUrl("home")
  })

  it ('see store details', async function() {
    // click a store and enter store detail page
    await driver.findElement(By.css(".cl_mp_sel_section:nth-child(1) > .cl_mp_img")).click()
    redirectUrl("storeDetail")

    // assert page value
    assert(await driver.findElement(By.css(".store_detail_info tr:nth-child(1) > td:nth-child(2)")).getText() == "Mitchell, Swift and Lueilwitz")
  })

  it('Client Operations', async function() {
   
    
    
    {
      const element = await driver.findElement(By.css(".cl_mp_sel_section:nth-child(1) > .cl_mp_img"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".storehome_arr_icon:nth-child(3) > path")).click()
    await driver.findElement(By.css("tr:nth-child(2) > td:nth-child(2) div")).click()
    await driver.executeScript("window.scrollTo(0,47)")
    await driver.findElement(By.css(".appo_submi_auto_fill_btn")).click()
    await driver.findElement(By.name("appo_submi_car_select")).click()
    {
      const dropdown = await driver.findElement(By.name("appo_submi_car_select"))
      await dropdown.findElement(By.xpath("//option[. = 'Car 1: Toyota-4Runner']")).click()
    }
    await driver.findElement(By.name("appo_submi_category_select")).click()
    {
      const dropdown = await driver.findElement(By.name("appo_submi_category_select"))
      await dropdown.findElement(By.xpath("//option[. = 'Oil Change']")).click()
    }
    await driver.findElement(By.css("input:nth-child(1)")).click()
    assert(await driver.switchTo().alert().getText() == "Appointment Submitted!\nPress OK to back to the home page.")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.css(".cl_mp_sel_section:nth-child(1) > .cl_mp_img")).click()
    await driver.findElement(By.css(".storehome_arr_icon:nth-child(3) > path")).click()
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2) div")).click()
    await driver.executeScript("window.scrollTo(0,47)")
    await driver.findElement(By.css(".appo_submi_auto_fill_btn")).click()
    await driver.findElement(By.name("appo_submi_car_select")).click()
    {
      const dropdown = await driver.findElement(By.name("appo_submi_car_select"))
      await dropdown.findElement(By.xpath("//option[. = 'Car 2: Toyota-Corolla']")).click()
    }
    await driver.findElement(By.name("appo_submi_category_select")).click()
    {
      const dropdown = await driver.findElement(By.name("appo_submi_category_select"))
      await dropdown.findElement(By.xpath("//option[. = 'Batteries & Electrical']")).click()
    }
    await driver.findElement(By.css("input:nth-child(1)")).click()
    assert(await driver.switchTo().alert().getText() == "Appointment Submitted!\nPress OK to back to the home page.")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.css(".cl_mp_sel_section:nth-child(1) > .cl_mp_img")).click()
    {
      const element = await driver.findElement(By.css(".cl_mp_sel_section:nth-child(1) > .cl_mp_img"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    await driver.findElement(By.css(".storehome_arr_icon:nth-child(3) > path")).click()
    await driver.findElement(By.css("tr:nth-child(4) > td:nth-child(2) div")).click()
    await driver.executeScript("window.scrollTo(0,47)")
    await driver.findElement(By.css(".appo_submi_auto_fill_btn")).click()
    await driver.findElement(By.name("appo_submi_car_select")).click()
    {
      const dropdown = await driver.findElement(By.name("appo_submi_car_select"))
      await dropdown.findElement(By.xpath("//option[. = 'Car 3: Others-Rav4']")).click()
    }
    await driver.findElement(By.name("appo_submi_category_select")).click()
    {
      const dropdown = await driver.findElement(By.name("appo_submi_category_select"))
      await dropdown.findElement(By.xpath("//option[. = 'Brake']")).click()
    }
    await driver.findElement(By.name("appo_submi_category_select")).click()
    {
      const dropdown = await driver.findElement(By.name("appo_submi_category_select"))
      await dropdown.findElement(By.xpath("//option[. = 'Exhaust System']")).click()
    }
    await driver.findElement(By.css("input:nth-child(1)")).click()
    assert(await driver.switchTo().alert().getText() == "Appointment Submitted!\nPress OK to back to the home page.")
    await driver.switchTo().alert().accept()
    await driver.findElement(By.css(".nav-link:nth-child(2) > .nav_bar_not")).click()
    await driver.executeScript("window.scrollTo(0,0)")
    await driver.findElement(By.css(".appointment_store_Table_One:nth-child(4) button")).click()
    await driver.findElement(By.css(".nav-link:nth-child(1) > .nav_bar_not")).click()
    {
      const element = await driver.findElement(By.css(".nav_bar_selected"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".cl_mp_sel_section:nth-child(1) > .cl_mp_img")).click()
    await driver.executeScript("window.scrollTo(0,734)")
    await driver.findElement(By.css(".storehome_arr_icon:nth-child(3)")).click()
    await driver.findElement(By.css(".nav-link:nth-child(3) > .nav_bar_not")).click()
    await driver.findElement(By.css("div:nth-child(1) > input")).click()
    await driver.findElement(By.css("div:nth-child(1) > input")).sendKeys("2023-4-10")
    await driver.findElement(By.css("div:nth-child(3) > input")).click()
    await driver.findElement(By.css("div:nth-child(3) > input")).sendKeys("store@test.com")
    await driver.findElement(By.css(".appointment_store_analysis_btn:nth-child(4) > input")).click()
  })
})
