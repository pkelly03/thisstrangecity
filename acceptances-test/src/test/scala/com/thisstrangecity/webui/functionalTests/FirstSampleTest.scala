package com.thisstrangecity.webui.functionalTests

import com.thisstrangecity.webui.SeleniumWebdriver
import org.testng.annotations.Test


class FirstSampleTest extends SeleniumWebdriver {


  @Test
  def firstTest() {

    assert(driver.getTitle() == "localhost")

  }

  @Test
  def secondTest() {

    assert(driver.getTitle() == "localhost")
  }
}