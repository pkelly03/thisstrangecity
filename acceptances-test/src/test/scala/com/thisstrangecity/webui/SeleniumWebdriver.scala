package com.thisstrangecity.webui

import org.testng.annotations._
import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.{WebDriver, By}
import org.openqa.selenium.chrome.ChromeDriver


class SeleniumWebdriver {


  var baseURL : String = _
  var browser : String = _
  var driver : WebDriver = _

  @Parameters(Array("browser", "baseURL"))
  @BeforeSuite
  def setUp(@Optional("firefox") browser: String, @Optional("http://localhost:8080/") baseUrl : String) {

    this.browser = browser
    this.baseURL = baseUrl

    if (browser == "firefox") {

      driver = new FirefoxDriver()

      driver.get(baseURL)

    } else {

     System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver")

    driver = new ChromeDriver()
    driver.get(baseURL)

  }

  }


  @AfterSuite
  def tearDown() {
    driver.quit()
  }

}

