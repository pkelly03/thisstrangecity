package com.thisstrangecity.webui.functionalTests

import com.thisstrangecity.webui.SeleniumWebdriver
import org.testng.annotations.Test


class FirstSampleTest extends SeleniumWebdriver {


  @Test
  def firstTest() {
    // verify we retrieve the page and have the title
    "Google Maps" should "have the proper title" in {
      assert(driver.getTitle() === "Google")
    }
  }

  @Test
  def secondTest() {
    // verify we retrieve the page and have the title
    "Google Maps" should "have the proper titles" in {
      assert(driver.getTitle() === "Google")

    }
  }
}