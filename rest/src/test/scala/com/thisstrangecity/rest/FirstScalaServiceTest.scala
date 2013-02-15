package com.thisstrangecity.rest

import org.scalatest.FunSuite


class FirstScalaServiceTest extends FunSuite {

  test("getSomeThing should return Hi") {

    val scalaService = new FirstScalaService
    assert (scalaService.getSomeThing("LONDON","Deepan") == "LONDONDeepan")
  }


}