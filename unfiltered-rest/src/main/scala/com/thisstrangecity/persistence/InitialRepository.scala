package com.thisstrangecity.persistence

import com.mongodb.casbah.commons.MongoDBObject
import com.mongodb._
import casbah.MongoConnection

class InitialRepository {

  def save() = {

    val placesMap = MongoDBObject( "Places"-> ("Piccadilly circus", "Green", "Paddington"))

    //Working java driver implementation
    /*
    val mongoClient =  new MongoClient("ds053607.mongolab.com", 53607)
    val db = mongoClient.getDB( "thisstrangecity" )
    val password = "city"
    db.authenticate("city", password.toCharArray)
    val  collection = db.getCollection("places")

    collection.save(placesMap)
    */

    // casbah mongodb driver implementation
    val mongo = new Mongo(new MongoURI("mongodb://ds053607.mongolab.com:53607"))
    val mongoConnection = new MongoConnection(mongo)
    val db = mongoConnection.getDB("thisstrangecity")

    db.authenticate("city", "city")

    val placesCollection = mongoConnection("thisstrangecity")("places")

    placesCollection += placesMap

  }

  def find() = {

    val mongo = new Mongo(new MongoURI("mongodb://ds053607.mongolab.com:53607"))
    val mongoConnection = new MongoConnection(mongo)
    val db = mongoConnection.getDB("thisstrangecity")

    db.authenticate("city", "city")

    val placesCollection = mongoConnection("thisstrangecity")("places")
    val place =  placesCollection.find()
    var places = List(Map)
    print(place.size)
    place.foreach{
      case value =>
        //places ::= value
        print (value)
    }

    //places
    Map("Places"-> ("Piccadilly Circus", "Canary Warf", "Paddington"))
  }

}
