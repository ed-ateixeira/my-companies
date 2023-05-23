const router = require('express').Router();

const CompanyController = require('../controllers/CompanyController');

router.post('/companies', (req, res) => CompanyController.create(req, res));

router.get('/companies', (req, res) => CompanyController.getAll(req, res));

router.get('/companies/:id', (req, res) => CompanyController.getById(req, res));

router.delete('/companies/:id', (req, res) => CompanyController.delete(req, res));

router.put('/companies/:id', (req, res) => CompanyController.update(req, res));

module.exports = router;
