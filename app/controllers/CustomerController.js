const CustomerControllers = module.exports;
const CustomerService = require('../services/CustomerService');

CustomerControllers.delete = async (req, res, next) =>{
    // extract the PATH params
    const params = req.params;

    try {
        await CustomerService.delete(params.id)
        res.send({message: 'Customer deleted'});
    } catch (error) {
        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

CustomerControllers.edit = async (req, res, next) =>{
    // extract the PATH params
    const params = req.params;
    // extract body params
    const body = req.body;

    try {
        await CustomerService.edit(params.id, body)
        res.send({message: 'Customer Update'});
    } catch (error) {
        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

