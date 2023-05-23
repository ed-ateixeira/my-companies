const { CompanyModel, CompanySchema } = require('../models/Company');
const mongoose = require('mongoose');

const CompanyController = {
  create: async (req, res) => {
    try {
      const lastCompany = await CompanyModel.findOne({}).sort({ id: -1 });

      const lastId = lastCompany?.id || 0;

      const company = {
        id: lastId + 1,
        name: req.body.name,
        address: req.body.address,
      };

      const createdCompany = await CompanyModel.create(company);

      res.status(201).json({ createdCompany, message: 'company created with success' });

    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (_, res) => {
    try {
      const companies = await CompanyModel.find();

      res.json(companies);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const id = req.params.id;

      const company = await CompanyModel.findOne({ id });

      if (!company) {
        res.status(404).json({ message: 'company not found' });
      } else {
        res.json(company);
      }

    } catch (error) {
      console.log(error)
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const deletedCompany = await CompanyModel.deleteOne({ id });

      if (!deletedCompany) {
        res.status(404).json({ message: 'company not found' });
      } else {
        res.status(200).json({ message: 'company deleted with success', deletedCompanyId: id });
      }
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const company = {
        name: req.body.name,
        address: req.body.address,
      };

      const updatedCompany = await CompanyModel.updateOne({ id }, company);

      if (!updatedCompany) {
        res.status(404).json({ message: 'company not found' });
      } else {
        res.status(200).json({ message: 'company updated with success', updatedCompany: { id, ...company } });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = CompanyController;
