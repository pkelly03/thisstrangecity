package com.thisstrangecity.webui

import org.scalatest.FlatSpec
import org.scalatest.matchers.ShouldMatchers
import org.testng.annotations.{AfterSuite, Test, Optional, BeforeSuite}
import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.By


class SeleniumWebdriver extends FlatSpec with ShouldMatchers {


  var baseUrl : String =  "http://www.google.com/"
  var driver : FirefoxDriver = new FirefoxDriver()

  @BeforeSuite
  def setUp() {
    driver.get(baseUrl)
  }

  @AfterSuite
  def tearDown() {
    driver.quit()
  }

}
