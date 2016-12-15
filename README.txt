**IMPORTANT**
As of MongoDB 2.2 the database does NOT support encryption, this means
it CANNOT be used for this study.
**IMPORTANT**

**GITHUB REPOSITORY**
https://github.com/mephan/INR.git


Currently we do not implement a 'demo mode', every run is done as if the user
is participating in a full study.


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

HOST : The CV server maintained by Jin-Woo (the gigabit)
PORT : 8888
Local port is 3001.

Use of NativeScript
--------------------------------------------------------------------------------
The application should easily port to NativeScript but at the time of writing does
not employ it. The underlying idea was to keep this code platform agnostic in
the hopes that users could make it work with anything available to them.
The current understanding is that NativeScript will allow us to create new
files on the iPad (Or other mobile device) filesystem which we will later be
able to access. This is a feature that we are looking to get working soon as we
would like to move towards a system that is not reliant on a network connection.

We would like to implement this as soon as possible. Currently images and video
are being hosted from the CV server and this is causing immense amounts of lag
if we are able to keep these files client side using the NativeScript wrapper
and storing them on the ipad, it should be much faster than if we are serving
them from the server.


Induced Errors for Patients
--------------------------------------------------------------------------------
Currently we are undergoing a period where we would like the users to perform
certain induced errors to help us train the system. In order to do this we are
instructing them to peform certain errors. The application - upon loadup -
currently attempts to read a file from the serving computer, parses it, and
loads it into session storage as a JSON string where it can later be parsed
back into JSON and accessed as an array to be used for errors.

The idea behind this is that the serving computer supplies a file with a new
induced error on each line, and that they are in the order that we would like
them to appear during application runtime.


Instructions for Convenience --

Adding a new screen to the application --
-------------------------------------------------------------------------------
Adding a new screen is a six step process.
    1. Create a new .jade file and structure the html in the manner of how you
    would like it to look.
    2. Add the route to 'index.js' in the routes directory
    3. Add the route to 'app.js'
    4. Connect the new page to the system by way of a redirect of some sort
    (see home.jade for redirect idea)
    5. Include the following jade macro --
        meta(name='apple-mobile-web-app-capable', content='yes')
    as this will allow the screen to remain in full screen mode when renavigating.
    6. Any and all screen redirects need to be made using the following command;
        window.location.assing('<new screen location>');
        using an ordinary html replacement will cause the page to reload and
        full screen capability will be lost
            -- you will also risk a socket disconnect which can cause the
            terminal output to look a little buggy.

        ** All communications back to the server have been disabled except for
         the JSON that was requested by Jin-Woo hence, commented out**
