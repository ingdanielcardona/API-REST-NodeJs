// importando el repositorio
const CustomerService = require('./app/services/CustomerService');

console.log('Testing...');

async function testCreate(id, name, lastname, email) {
    await CustomerService.create({
        id: id,
        name: name,
        lastname: lastname,
        email: email
    });
}

async function testFindById(idCustomer) {
    const customerFound = await CustomerService.findCustomer(idCustomer);
    console.log(customerFound);
}

async function testEdit(idCustomer, name, lastname, email) {
    await CustomerService.edit(idCustomer, {
        name: name,
        lastname: lastname,
        email: email
    });
}

async function testDelete(idCustomer) {
    await CustomerService.delete(idCustomer)
}


// testCreate('1','Luis','Mejia','lucho@mail.com');
// testEdit('111','Juan','Villa','juan@mail.com');
// testFindById('111');
// testDelete('111');