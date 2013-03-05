package com.thisstrangecity.rest.resources

import unfiltered.request._
import unfiltered.response._

import net.liftweb.json._
import net.liftweb.json.JsonDSL._
import com.thisstrangecity.persistence.InitialRepository

class InitialResource extends unfiltered.filter.Plan {

def intent = {

  case req @ Path(Seg("unfiltered-rest"::city :: Nil)) => req match {
    case GET(_) => {
      val repo =  new InitialRepository()
      repo.save()
      Json(Map("Top"-> Map("secondary" -> List("dev", "qa", "prod"))))
    }
   /* case GET(_) => req match {
      case Accepts.Json(_) => Ok ~> JsonContent ~> ResponseString("Get JSON request genre:unfiltered  tune: " + city)
      case _ => NotAcceptable ~> ResponseString("You must accept application/json")
    }*/

  }
  case _ => ResponseString("Request is not valid\n")
}

/*def onException(ctx: ChannelHandlerContext, t: Throwable) {
  //Be sure to add proper error handling
  println("Something went wrong")
}*/
}