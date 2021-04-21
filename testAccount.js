const AccountService = require('./app/services/AccountService')
const AccountRepository = require('./app/repositories/AccountRepository')

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

async function testWithdraw(idAccount, amount) {
    await AccountService.withdraw(idAccount, amount);
}

async function testEdit(idAccount, amount) {
    await AccountRepository.edit(idAccount, amount);
}

async function testConsign(idAccount, amount) {
    await AccountService.consign(idAccount, amount);
}

async function testTranfer(idAccount, amount) {
    await AccountService.trasnfer(idAccount, amount);
}

// testCreate('002',100500,'111').then(console.log('Account created'));
// testListAccountByCustomer('111');
// testEdit('001', { id: '001', amount: 900, customerid: '112' });
// testDelete('002');
// testWithdraw('001',65000);
// testConsign('001', 50000);
// testTranfer({ id1: '001', id2: '002' }, 45000);
