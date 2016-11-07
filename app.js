/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , routes = require('./routes')


  var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))

app.use(express.static(__dirname+"/public"));
app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});
app.get('/patienthome/',routes.patienthome);
app.get('/showPatient/', routes.showPatient);
app.get('/beginsetup/', routes.beginsetup);
app.get('/devicesetup/', routes.devicesetup);
app.get('/syncing/', routes.syncing);
app.get('/complete/',routes.complete);
app.get('/removehands/',routes.removehands);
app.get('/calibrate/',routes.calibrate);
app.get('/completecalibrate/',routes.completecalibrate);
app.get('/begintask/',routes.begintask);
app.get('/starttask/',routes.starttask);
app.get('/tasktest/',routes.taskTest);
app.get('/taskinit/', routes.taskinit);
app.get('/tasksetup/',routes.tasksetup);
app.get('/thankyou/',routes.endscreen);
app.get('/survey/', routes.survey);
app.get('/home/', routes.home);
app.listen(3000)
