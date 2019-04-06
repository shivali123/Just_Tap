const places = require('../model/places.model.js');
const mongoose = require('mongoose');
const placesModel = mongoose.model('places')

exports.create = (req, res) => {
    if(!req.body.lat) {
        return res.status(400).send({
            message: "places  can not be empty",
            parameter:req.body.place
        });
    }
    // Create a places
    const placestosave = new places({
      title: req.body.title || "Unnamed places",
      lat: req.body.lat,
      lng: req.body.lng,
      disable: req.body.disable
    });

    // Save places in the database
    placestosave.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the places."
        });
    });
};
exports.findAll = (req, res) => {
  places.find()
    .then(places => {
        res.send(places);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving placess."
        });
    });
};

exports.update = (req, res) => {
  // Validate Request
      if(!req.body.title && !req.body.lat) {
          return res.status(400).send({
              message: "Selection seems to be empty!"
          });
      }

      // Find place and update it with the request body
      places.findByIdAndUpdate(req.params.placeId, {
          title: req.body.title || "Unnamed Profile",
          lat: req.body.lat,
          lng: req.body.lng,
          disable: req.body.disable
      }, {new: true})
      .then(place => {
          if(!place) {
              return res.status(404).send({
                  message: "Profile not found with id " + req.params.placeId
              });
          }
          res.send(place);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "Profile not found with id " + req.params.placeId
              });
          }
          return res.status(500).send({
              message: "Error updating place with id " + req.params.placeId
          });
      });
};

exports.delete = (req, res) => {
  //find the place  
  places.findByIdAndRemove(req.params.placesId)
      .then(places => {
          if(!places) {
              return res.status(404).send({
                  message: "places not found with id " + req.params.placesId
              });
          }
          res.send({message: "places deleted successfully!"});
      }).catch(err => {
          if(err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
                  message: "places not found with id " + req.params.placesId
              });
          }
          return res.status(500).send({
              message: "Could not delete places with id " + req.params.placesId
          });
      });
};
