var mongoose = require('mongoose');


// create models
require('./models/specialty');
require('./models/provider');


// mongodb connection
mongoose.connect("mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1", { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Connection successful");
});