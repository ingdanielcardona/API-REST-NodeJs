const AccountService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository');
const AccountRepository = require('../repositories/AccountRepository');

AccountService.create = async (account) => {

    const customerFound = await CustomerRepository.findByID(account.customerid);

    if (customerFound.length === 0) {
        throw new Error('Customer doesnt exist');
    }
    const accountsByCustomer = await AccountRepository.listAccountByCustomer(account.customerid);

    if (accountsByCustomer.length >= 3) {
        throw new Error('no more than 3 accounts...');
    }
    account.openedat = new Date();
    await AccountRepository.create(account);
}

AccountService.listAccountByCustomer = async (idCustomer) => {

    const customerFound = await CustomerRepository.findByID(idCustomer);

    if (customerFound.length == 0) {
        throw new Error('Customer doesnt exist');
    }
    return await AccountRepository.listAccountByCustomer(idCustomer);
}

AccountService.delete = async (idAccount) => {
    
    
    const account = await AccountRepository.findByID(idAccount);
    
    if (account.length == 0) {
        throw new Error('Account doesnt exist');
    }
    if (account[0].amount > 0) {
        throw new Error('Account with founds');
    }

    await AccountRepository.delete(idAccount);
}
