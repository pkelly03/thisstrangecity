# This Strange City #

thisstrangecity is a template project that sets up a gradle environment

Gradle is a pretty cool build tool for implementing jvm based applications.
Yeoman on the other hand is excellent framework for packaging and doing all sorts of sexy stuff for front end work.

This project triggers a yeoman build from within a gradle build file. The gradle build fails
if any of the testacular javascript tests fail. Result.

## Prerequisites ##
install yeoman

curl -L get.yeoman.io | bash

This does a health check on your system to see if you have all required programs installed.
Install anything it finds missing. It gives you instructions on how to do this.

Because we use angular on this project, you will need to install testacular

npm install testacular

Install all the required frameworks it recommends


## Build & Run ##

Start catalina - catalina run

$ cd thisstrangecity
$ gradle everything

This should spawn up an instance of the server or complain if any compilation or test failures.

