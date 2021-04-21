const AccountRepository = module.exports
const DB = require('../config/database')

AccountRepository.create = (idAccount) => {
    return DB('accounts').insert(idAccount)
}

AccountRepository.listAccountByCustomer = (customerId) => {
    return DB('accounts').where({ customerid: customerId }).select('*');
}

AccountRepository.edit = (idAccount, account) => {
    return DB('accounts').where({ id: idAccount }).update(account)
}

AccountRepository.delete = (idAccount) => {
    return DB('accounts').where({ id: idAccount }).del()
}

AccountRepository.findByID = (idAccount) => {
    
    return DB('accounts').where({ id: idAccount }).select('*')
}

