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
        throw new Error('Account with funds');
    }

    await AccountRepository.delete(idAccount);
}

AccountService.withdraw = async (idAccount, amount) => {
    
    const account = await AccountRepository.findByID(idAccount);
    if (account.length == 0) {
        throw new Error('Account doesnt exist');
    }
    if (account[0].amount <= 0) {
        throw new Error('Account without funds ');
    }
    if (amount <= 0) {
        throw new Error('Invalid Withdraw');
    }

    let monto = account[0].amount - amount;
    account[0].amount = monto;

    await AccountRepository.edit(idAccount, account[0]);
}

AccountService.consign = async (idAccount, amount) => {
    
    const account = await AccountRepository.findByID(idAccount);
    if (account.length == 0) {
        throw new Error('Account doesnt exist');
    }
    if (amount <= 0) {
        throw new Error('Invalid consign');
    }
    
    let monto = account[0].amount + amount;
    console.log(monto);
    account[0].amount = monto;
    
    await AccountRepository.edit(idAccount, account[0]);
}

AccountService.trasnfer = async (idAccounts, amountTransfer) => {
    
    const account1 = await AccountRepository.findByID(idAccounts.id1);
    const account2 = await AccountRepository.findByID(idAccounts.id2);

    if (account1.length == 0) {
        throw new Error('Account to transfer doesnt exist');
    }
    if (account2.length == 0) {
        throw new Error('Account withdraw doesnt exist');
    }
    if (amountTransfer <= 0) {
        throw new Error('Invalid consign');
    }
    //Add transfer account1
    let amount1 = account1[0].amount + amountTransfer; //39500 + 45000
    account1[0].amount = amount1;
    //subtract tranfer account2
    let amount2 = account2[0].amount - amountTransfer; //100500 - 45000
    account2[0].amount = amount2;

    await AccountRepository.edit(idAccounts.id1, account1[0]);
    await AccountRepository.edit(idAccounts.id2, account2[0]);
}