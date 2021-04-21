const CustomerService = module.exports;
const CustomerRepository = require('../repositories/CustomerRepository');
const AccountRepository = require('../repositories/AccountRepository');

CustomerService.create = async (customer) => {

    const customerFound = await CustomerRepository.findByID(customer.id);
    //if the size is greater than zero, it is because the ID already exists 
    if (customerFound.length > 0) {
        throw new Error('Customer already exist');
    }
    await CustomerRepository.create(customer).then(console.log('Customer created'));
}

CustomerService.edit = async (idAccount, customer) => {

    const customerFound = await CustomerRepository.findByID(idAccount);
    // if the size is equals to zero, customer isn't exist.
    if (customerFound.length === 0) {
        throw new Error('Customer dont exist');
    }
    CustomerRepository.edit(idAccount, customer).then(console.log('Customer edited'));
}

CustomerService.findCustomer = async (idCustomer) =>{
    
    const customerFound = await CustomerRepository.findByID(idCustomer);
    //if customer in DB is zero, dont exist
    if (customerFound.length == 0) {
        throw new Error('ids customer doesnt exist');
    }
    return customerFound;
}

CustomerService.delete = async (idCustomer) => {
    
    const listCustomerAccounts = await AccountRepository.listAccountByCustomer(idCustomer);
    const customerFound = await CustomerRepository.findByID(idCustomer);
    
    //if customer have accounts, dont delete
    if (listCustomerAccounts.length > 0) {
        throw new Error('Customer with accounts, can not be delete');
    } else if (customerFound.length == 0 ) {
        throw new Error('Customer dont exist');
    }
    CustomerRepository.delete(idCustomer).then(console.log('Customer deleted'));
}