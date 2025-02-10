// JavaScript Functions Challenge Setup 

// Task 1: Function Declaration
console.log("Task 1- Function Declaration");

function calculateProfit(costPrice, sellingPrice, unitsSold) { // Function Declaration to calculate total profit
    const profit = (sellingPrice - costPrice) * unitsSold; // Formula calculating profit
    return `Total Profit: $${profit}`; // Output total profit
}

// Logging output 
console.log(calculateProfit(20, 30, 100)); // Output: $1000
console.log(calculateProfit(50, 70, 200)); // Output: $4000
