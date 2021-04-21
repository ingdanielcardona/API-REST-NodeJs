const AccountController = module.exports;

const AccountService = require('../services/AccountService');

AccountController.listAccountByCustomer = async (req, res, next) =>{
    // extract the PATH params
    const params = req.params;

    try {
        const response = await AccountService.listAccountByCustomer(params.id)
        res.send(response);
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.createAccount = async (req, res, next) =>{
    // extract body params
    const body = req.body;

    try {
        await AccountService.create(body)
        res.send({message: 'Account Created'});
    } catch (error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}