package com.thisstrangecity.rest

import org.scalatest.FunSuite
import com.thisstrangecity.persistence.InitialRepository
import com.mongodb.casbah.commons.MongoDBObject

class InitialRepositoryTest extends FunSuite {

  test("should insert data in db") {

    val repository = new InitialRepository()
    val places = Map("name" -> "Piccadilly", "location" -> "Oxford St")
    repository.save(places)
  }

  test("should find data in db") {

    val repository = new InitialRepository()
     val places = repository.find()
    print(places)
  }
}
