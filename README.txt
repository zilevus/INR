**IMPORTANT**
As of MongoDB 2.2 the database does NOT support encryption, this means
it CANNOT be used for this study.
**IMPORTANT**

Basic Modules
-------------------------------------------------------------------------------
The INR application uses NodeJS as its backbone. It is supported using the
ExpressJS framework as well as components of Socket.io and stormpath.


Templating Engine
-------------------------------------------------------------------------------
We are using Jade as the templating engine for the rendering of HTML as it
allows for fast prototyping, easy reusability, cleaner looking code and
the integrating of javascript.

Use of Socket.io
-------------------------------------------------------------------------------
Sockets are currently being used as the main source of communication between
the user and those monitoring the users interaction. Currently the sockets
monitor the current page of the user, the exercise that is being performed,
which iteration of the exercise is being performed, the time of day and any
interaction with the page that the user inputs.

Use of NativeScript
--------------------------------------------------------------------------------
The application currently supports NativeScript but at the time of writing does
not employ it. The underlying idea was to keep this code platform agnostic in
the hopes that users could make it work with anything available to them.
Working with the iPad filesystem has not been tested and may prove difficult.
Android being easier to work with should not be a problem.


Instructions for Convenience --

Adding a new screen to the application --
-------------------------------------------------------------------------------
Adding a new screen is a four step process.
    1. Create a new .jade file and structure the html in the manner of how you
    would like it to look.
    2. Add the route to 'index.js' in the routes directory
    3. Add the route to 'app.js'
    4. Connect the new page to the system by way of a redirect of some sort
    (see home.jade for redirect idea)
