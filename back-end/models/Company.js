const mongoose = require('mongoose');

const { Schema } = mongoose;

const AddressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

const CompanySchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: AddressSchema,
    required: true,
  },
}, { timestamps: true });

const CompanyModel = mongoose.model('Company', CompanySchema);

module.exports = {
  CompanyModel,
  CompanySchema,
  AddressSchema,
};
