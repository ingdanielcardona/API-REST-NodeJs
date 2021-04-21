const AccountService = require('./app/services/AccountService')

console.log('Testing...')

async function testCreate(id, amount, customerid) {
    await AccountService.create({
        id: id,
        amount: amount,
        customerid: customerid
    })
}

async function testListAccountByCustomer(idCustomer) {
    const accountList = await AccountService.listAccountByCustomer(idCustomer)
    console.log(accountList);
}

async function testDelete(idAccount) {
    await AccountService.delete(idAccount);
}




// testCreate('003',100500,'111').then(console.log('Account created'));
// testListAccountByCustomer('111');
// testEdit();
testDelete('002');