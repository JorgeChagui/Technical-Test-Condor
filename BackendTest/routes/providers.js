var express = require('express');
var router = express.Router();
var Provider = require('../models/provider');

// this Route returns all Providers
router.get('/', function (req, res, next) {
  Provider.find().exec((err, providers) => {
    if (err) {
      next(err);
      return;
    }
    res.send(providers);
  })
});

// this Route returns one Provider finding it by the id given in the route
router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  // Check if id is valid ObjectId
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId.
    Provider.findById(id).exec((err, provider) => {
      if (err) {
        next(err);
        return;
      }
      res.send(provider);
    })
  } else {
    res.status(500).send("Use valid id");
  }
});

// This route create a new Provider

/*
{
    "firstName": "Juan",
    "lastName": "suarez",
    "document": "55664234",
    "email": "juansuarez@condor.io",
    "address": "Cra 30 # 15-70",
    "city": "Cartagena",
    "specialty": "5a1ee5e6d0e8cfb9049a7904",
    "status": "1"
}
*/
router.post('/create', function (req, res, next) {
  var provider = req.body;
  // Delete _id if sent
  delete provider._id;
  newProvider = new Provider(provider);

  newProvider.save((err, providerCreated) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: "Provider created", providerCreated });
    }
  })
});

// This route allows update one Provider, by the given id
router.put('/:id/update', function (req, res, next) {
  var id = req.params.id;
  var provider = req.body;
  // Delete _id if sent, we don´t want to update that
  delete provider._id;

  // Check if id is valid ObjectId
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId.
    Provider.updateOne({ _id: id }, provider, (err) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send({ message: "Provider updated" });
      }
    })
  } else {
    res.status(500).send("Use valid id");
  }

});

// This route deletes one Provider, by the given id
router.delete('/:id/delete', function (req, res, next) {
  var id = req.params.id;
  // Check if id is valid ObjectId
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId.
    Provider.deleteOne({ _id: id }, (err) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send({ message: "Provider deleted" });
      }
    })
  } else {
    res.status(500).send("Use valid id");
  }
});

module.exports = router;
