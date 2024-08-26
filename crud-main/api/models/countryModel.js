const mongoose = require('mongoose'); 

const CountrySchema = mongoose.Schema({
     id: {
      type: String,
       required: true,
       unique: true
     },
    countryName: {
        type: String,
        required: true
      },
      countryCode: {
        type: String,
      },
      phoneCode: {
        type: String,
      },
      timeZone: {
        type: String,
      },
    }, { timestamps: true });


const country = mongoose.model('country', CountrySchema);
module.exports = country;
