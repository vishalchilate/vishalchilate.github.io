var appliace = require('../models/appliace');
var config = require('../../config');

var secretKey = config.secretKey;


module.exports = function(app, express, io) {


  var api = express.Router();

  api.get('/state', function(req, res) {
    res.json(appliace.applianceStateModel);
  });


  api.post('/state/:appliace', function(req, res) {
    appliace.setState(req.params.appliace);
    res.json(appliace.applianceStateModel);
  });


  api.use(function(req, res, next) {
    console.log("Somebody just came to our app!");
  });

  return api;

}
