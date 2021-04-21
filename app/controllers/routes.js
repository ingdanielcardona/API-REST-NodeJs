const express = require('express');

const CustomerControllers = require('./CustomerController');
const AccountController = require('./AccountController');

const router = express.Router();

// define path´s function
router.delete('/customers/:id',CustomerControllers.delete);
router.put('/customers/:id',CustomerControllers.edit);
router.get('/customers/:id/accounts',AccountController.listAccountByCustomer);
router.post('/accounts', AccountController.createAccount);

module.exports = router; 