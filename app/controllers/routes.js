const express = require('express');

const CustomerControllers = require('./CustomerController');
const AccountController = require('./AccountController');

const router = express.Router();

// define path´s function
router.delete('/customers/:id',CustomerControllers.delete);
router.put('/customers/:id',CustomerControllers.edit);
router.get('/customers/:id/accounts',AccountController.listAccountByCustomer);
router.post('/accounts', AccountController.createAccount);
router.put('/accounts/:id/withdraw', AccountController.withdrawAccount);
router.put('/accounts/:id/consign', AccountController.consignAccount);
router.put('/accounts/tranfer', AccountController.transferAccount);

module.exports = router;