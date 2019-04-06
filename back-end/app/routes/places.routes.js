module.exports = (app) => {
    const places = require('../controllers/places.controller.js');
    app.post('/places', places.create);
    app.get('/places', places.findAll);
    app.put('/places/:placeId', places.update)
    app.delete('/places/:placesId', places.delete);
}
