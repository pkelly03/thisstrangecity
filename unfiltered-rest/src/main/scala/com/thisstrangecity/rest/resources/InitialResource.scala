package com.thisstrangecity.rest.resources

import unfiltered.request._
import unfiltered.response._

import net.liftweb.json._
import com.thisstrangecity.persistence.InitialRepository

class InitialResource extends unfiltered.filter.Plan {

  def intent = {

    case req@Path(Seg("unfiltered-rest" :: city :: Nil)) => req match {

      case GET(_) => {
        val repo = new InitialRepository()
        val result = repo.find()
        new ComposeResponse(JsonContent ~> ResponseString(result.toString()))
      }

      case POST(_) => {
        val repo = new InitialRepository()
        val data: String = Body.string(req)
        val placesMap = parse(data).values.asInstanceOf[Map[String, Any]]
        repo.save(placesMap)
        ResponseString("Posted")
      }
    }
    case _ => ResponseString("Request is not valid\n")
  }
}