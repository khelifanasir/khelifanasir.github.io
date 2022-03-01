"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	debit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.

*/

const bank = {
    transactionsDB: [],
};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];


bank.saveTransaction = function (id, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    customer.customerTransactions.push(amount);

};

bank.debit = function (id, amount) {
    let debitbalance = []

    for (let i=0; i<bank.transactionsDB.length; i++){
    
    let debit = 0
    
    for (let j=0; j<bank.transactionsDB[i].customerTransactions.length; j++){
         if(bank.transactionsDB[i].customerTransactions[j] > 0){
    debit = debit + bank.transactionsDB[i].customerTransactions[j]
    
    }
  }
    debitbalance.push(debit);
    
    }
    
    return debitbalance;
};
console.log(bank.debit())

bank.debit = function (id, amount) {
    let debitbalance = []

    for (let i=0; i<bank.transactionsDB.length; i++){
    
    let debit = 0
    
    for (let j=0; j<bank.transactionsDB[i].customerTransactions.length; j++){
         if(bank.transactionsDB[i].customerTransactions[j] < 0){
    debit = debit + bank.transactionsDB[i].customerTransactions[j]
    
    }
  }
    debitbalance.push(debit);
    
    }
    
    return debitbalance;
    
};


bank.getBalance = function (id, amount ) {
    let newbalance = []

    for (let i=0; i<bank.transactionsDB.length; i++){
    
    let balance = 0
    
    for (let j=0; j<bank.transactionsDB[i].customerTransactions.length; j++){
    
    balance = balance + bank.transactionsDB[i].customerTransactions[j]
    
    
    }
    
     newbalance.push(balance)
    
    }
    
    return newbalance
};

console.log(bank)

/**
 * @returns {number}  returns sum of all balances
 */
bank.bankBalance = function () {
    // eslint-disable-next-line semi
    let totalbankbalnce = 0

    for (let i=0; i<bank.transactionsDB.length; i++){
    
    for (let j=0; j<bank.transactionsDB[i].customerTransactions.length; j++){
    
    totalbankbalnce = totalbankbalnce + bank.transactionsDB[i].customerTransactions[j]
    
    }
    
    }
    
    return totalbankbalnce;
    
    };
    




/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = {bank }; //add all of your object names here that you need for the node mocha tests