// userController.js
const Country = require('../models/countryModel');

// Get all country
exports.getAllCountry = async (req, res) => {
    try {
        const country = await Country.find({});
        res.status(200).json(country);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 
// Get country by Id
exports.getCountryById = async (req, res) => {
    const id = req.params.id;

    try {
        const country = await Country.find({ id: id });
        if (!country) {
            return res.status(404).json({ message: 'country not found' });
        }
        res.status(200).json(country);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 
// Create a new user

exports.createCountry = async (req, res) => {
    try {
    
        const country = await Country.create(req.body);
        res.status(201).json(country);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
};

// Delete user by ID

exports.deletedCountryById = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedCountry = await Country.findOneAndDelete({ id: id });

        if (!deletedCountry) {
            return res.status(404).json({ message: 'Country not found' });
        }

        res.status(200).json({ message: 'Country deleted successfully', deletedCountry });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 
// Update country by ID

exports.updatedCountryById = async (req, res) => {
    const id = req.params.id;

    try {
        // Find the existing country by ID and update with the new data
        const updatedCountry = await Country.findOneAndUpdate(
            { id: id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedCountry) {
            return res.status(404).json({ message: 'country not found' });
        }

        res.status(200).json(updatedCountry);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};
 