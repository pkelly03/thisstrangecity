package com.thisstrangecity.persistence

import com.mongodb._
import casbah.commons.{MongoDBObject, MongoDBListBuilder}
import casbah.MongoConnection


class InitialRepository {

  def save(places: Map[String, Any]) = {

    val placesMap = MongoDBObject(places.toList)

    val mongo = new Mongo(new MongoURI("mongodb://ds053597.mongolab.com:53597"))
    val mongoConnection = new MongoConnection(mongo)
    val db = mongoConnection.getDB("thisstrangecity")
    db.authenticate("city", "city")

    val placesCollection = mongoConnection("thisstrangecity")("places")
    placesCollection += placesMap
  }

  def find(): Seq[Any] = {

    val mongo = new Mongo(new MongoURI("mongodb://ds053597.mongolab.com:53597"))
    val mongoConnection = new MongoConnection(mongo)
    val db = mongoConnection.getDB("thisstrangecity")
    db.authenticate("city", "city")

    val placesCollection = mongoConnection("thisstrangecity")("places")
    val place = placesCollection.find()
    val builder = new MongoDBListBuilder()
    place.foreach {
      case value =>
        builder.+=(value)
        print(value)
    }
    builder.result().tail.clone()
  }
}
