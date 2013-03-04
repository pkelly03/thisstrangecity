package com.thisstrangecity.rest

import org.scalatest.FunSuite
import com.thisstrangecity.persistence.InitialRepository

class InitialRepositoryTest extends FunSuite {

  test("should insert data in db") {

    val repository = new InitialRepository()
    repository.save()
  }

  test("should find data in db") {

    val repository = new InitialRepository()
    repository.find()
  }
}
