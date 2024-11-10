// Task 4 create main application

//imprt calculateportfoliovalue, getportfolioallocation, and transaction
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

function displayPortfolioValue(){
    console.log("Total Portfolio Value:", calculatePortfolioValue());
    console.log("Portfolio Allocation:");
    getPortfolioAllocation().forEach(allocation => {
        console.log(`${allocation.name}: ${allocation.allocation.toFixed(2)}%`);
    });
};
displayPortfolioValue();

//create transaction instances for different assets and display the transaction details
try{
    const buyTransaction = new Transaction(1, "buy", 3);
    const sellTransaction = new Transaction(3,"sell", 7);
    console.log("\nTransactions Exected Successfully");
} catch (error) {
    console.log("Transaction Error:", error.message);
}

console.log("\nUpdated Portfolio Status:");
displayPortfolioValue();



