package com.thisstrangecity.webui.functionalTests

import org.scalatest.FunSuite
import com.thisstrangecity.webui.pagemodel.FirstSample

class FirstSampleTest extends FunSuite {

    test("getSomeThing should return Hi") {

      val scalaService = new FirstSample()
      assert (scalaService.getValueOfMethod() == "scalaFirstSample Calss")
    }
}
