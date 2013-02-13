package com.thisstrangecity.rest

import javax.ws.rs._

@Path("/something")
class FirstScalaService {

  @Path("/{city}")
  @GET
  def getSomeThing(@PathParam("city") city: String, @QueryParam("name") name: String ) =  {
    city + name
  }

}