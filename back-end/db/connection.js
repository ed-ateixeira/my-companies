const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb+srv://testuser:BwaDcR3Xsg9UCKKf@my-companies.7sv5gis.mongodb.net/?retryWrites=true&w=majority');
    console.log('database connected');
  } catch (error) {
    console.log('Error: ', error);
  }
}

module.exports = main;
