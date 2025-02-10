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

// Task 2: Function Expression
console.log("\nTask 2- Function Expression");

const calculateSalesTax = function(amount, taxRate) { // Calulating sales tax
    const salesTax = amount * taxRate;
    return `Sales Tax: $${salesTax}`;
};

// Logging output
console.log(calculateSalesTax(100, 0.07));
console.log(calculateSalesTax(500, 0.1));

// Task 3: Arrow Function
console.log("\nTask 3- Arrow Functions");

let calculateBonus = (salary, performanceRating) => {  // Arrow function calulating employee bonus 
    let bonus; // declaring 'bonus' as variable 

    if (performanceRating === "Excellent") {
        bonus = salary * 0.20; // 20% bonus for "Excellent" performance rating
    } else if (performanceRating === "Good") {
        bonus = salary * 0.10; // 10% bonus for "Good" performance rating
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05; // 5% bonus for "Average" performance rating 
    }
    return bonus;
};

// Logging bonus calulations 
console.log("Bonus: $", calculateBonus (5000, "Excellent")); // Bonus with "Excellent" rating and 5000 salary
console.log("Bonus: $", calculateBonus (7000, "Good")); // Bonus with "Good" rating and 7000 salary

// Task 4: Parameters and Arguments 
console.log("\nTask 4- Parameters and Arguments");


let calculateSubscriptionsCost = function(plan, months, discount=0) { // calulate subscription costs based on plan
    let monthlyCost;
    if (plan === "Basic") { // Basic plan is $10/ month
        monthlyCost = 10;
    } else if (plan === "Premium") { // Premium plan is $20/ month
        monthlyCost = 20;
    } else if (plan === "Enterprise") { // Enterprise plan is $50/ month
        monthlyCost=50;
    };

let totalCost = monthlyCost * months; // Calculate total cost before discount

totalCost = totalCost - discount; // Apply discount 

return totalCost;
}; 

// logging output of test data
console.log(`Basic: $${calculateSubscriptionsCost("Basic", 6, 10)}`); // Logging output of basic subsription with 6 months and $10 discount
console.log(`Premium: $${calculateSubscriptionsCost("Premium", 12, 0)}`); // Logging output of Premium subscription with 12 months and no discount