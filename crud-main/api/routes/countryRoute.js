const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');
 

// Routes for countryController
router.get('/country', countryController.getAllCountry);
router.get('/country/id/:id', countryController.getCountryById); 
// Routes for create a country
router.post('/country', countryController.createCountry);
// Routes for delete a country
router.delete('/country/id/:id', countryController.deletedCountryById); 
// Routes for update a country
router.put('/country/id/:id', countryController.updatedCountryById); 
 

module.exports = router;
