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

// Task 5: Returning Values
console.log("\nTask 5- Returning Values");

const convertCurrency = function(amount, exchangeRate) { // Function to convert currency 
const convertedAmount = (amount * exchangeRate).toFixed(2); 

return convertedAmount;
};

// Logging output
console.log(`Converted Currency 1: $${convertCurrency(100, 1.1)}`); // Logging converted currency of $100 with exchange rate of 1.1
console.log(`Converted Currency 2: $${convertCurrency(250, 0.85)}`); // Logging converted currency of $250 with exchange rate of .85
 
// Task 6: Higher-Order Functions
console.log("\nTask 6- Higher Order Functions");

let orders = [200, 600, 1200, 450, 800]; // Declaring an array 'orders'


let applyBulkDiscount = (orders, discountFunction) => { // function to apply discount to the orders
    let discountedOrders = orders.map(discountFunction);

    console.log(`Discounted Orders: ${discountedOrders}`); //Logging the updated order values
};

applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); // Applying 10$ discount for orders over $500

// Task 7: Closures
console.log("\nTask 7- Closures");

function createExpenseTracker() { // Function to create expense tracker
    let totalExpense = 0; // Initialize total expense to 0 
    return function(expense){ // Return function 
        totalExpense += expense; // Add expenses to total 
        return `Total Expenses: $${totalExpense}`
    };
};

let tracker = createExpenseTracker();

// Logging test data output
console.log(tracker(200)); // Expect output: 200
console.log(tracker(150)); // Expected output: 350

// Task 8- Recursion in JavaScript
console.log("\nTask 8- Recursion in JavaScript");

function calculateYearsToPromotion(employeeLevel) { // Recursive function to calulate the years needed for promotion
    if (employeeLevel >= 10) {
        return 0;
    };
    let years = (10 - employeeLevel) * 2  // Promotion takes 2 years
    
    return `Years to Level 10: ${years}`; 
};

console.log(calculateYearsToPromotion(7)); // Expected output: "Years to Level 10: 6"
console.log(calculateYearsToPromotion(5)); // level 5 employee: "Years to Level 10: 10"
