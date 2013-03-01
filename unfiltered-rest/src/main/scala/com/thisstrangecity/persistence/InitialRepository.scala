package com.thisstrangecity.persistence

import com.mongodb.casbah.{MongoConnection, MongoClient}
import com.mongodb.casbah.commons.MongoDBObject
import com.mongodb.{MongoURI, Mongo, DBAddress}


class InitialRepository {

  def save() = {
    //val addr = "mongodb://ds039437.mongolab.com:39437"
    val mongo = new Mongo(new MongoURI("mongodb://thisstrangecity:thisstrangecity@ds039437.mongolab.com:39437"))
    val mongoConnection = new MongoConnection(mongo)


    //val mongoConnection = MongoConnection()
    val placesCollection = mongoConnection("thisstrangecity")("places")

    val placesMap = MongoDBObject( "Places"-> ("Piccadilly", "Green", "Paddington"))

    placesCollection += placesMap

  }

  def find():Map[String, Any] = {

    val mongoConnection = MongoConnection()
    val placesCollection = mongoConnection("unfiltered")("places")
    placesCollection.findOne()

    Map("Places"-> ("Piccadilly Circus", "Canary Warf", "Paddington"))
  }

}
