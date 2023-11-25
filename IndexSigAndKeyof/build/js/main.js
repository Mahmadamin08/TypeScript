"use strict";
// Index Signatures and Keyof Assertions
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]); // can't use without Index signature
const todaysNet = (transactions) => {
    let total = 0;
    // without index signature we can't access transactions[transaction] in loop 
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
todaysTransactions.Pizza = 40;
console.log(todaysTransactions['Dave']); // undefined
