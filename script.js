//Task 1
function formatFullName(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Invalid name input.";
    }

let formattedFirst = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
let formattedLast = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

return `${formattedLast}, ${formattedFirst}`;

}

console.log(formatFullName("Homam","Zituni"));

//Task 2
function calculateTotalCost(price,quantity,taxRate) {
if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
return "Invalid Input.";
}
let totalCost = (price * quantity) * (1 + taxRate);
return totalCost;
}

console.log(calculateTotalCost(10, 2, 0.1));


// Task 3
function checkEligibility (age, isEmployed) {
if (age > 18 && isEmployed) {
return "You are eligible";
} else if (age > 18 && !isEmployed){
return "You are conditionally eligible";
} else {
return "You are not eligible";
} }


console.log(checkEligibility(20, true));  
console.log(checkEligibility(20, false)); 
console.log(checkEligibility(16, true));  
