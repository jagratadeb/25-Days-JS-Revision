// Declaring a constant variable for account ID
const accountID = 144553; // accountID is a constant and cannot be reassigned

// Declaring a let variable for account email
let accountEmail = "jagratadeb2004@gmail.com"; // let allows reassignment within its scope

// Declaring a var variable for account password
var accountPassword; // var is function-scoped and can be redeclared

// Implicitly declaring a global variable for account city (not recommended)
accountCity = "Bhubaneswar"; // Avoid using undeclared variables; use let, const, or var

// Logging values to the console
console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// Attempting to reassign values
// accountID = 1234567; // Uncommenting this line will throw an error because accountID is a constant
accountEmail = "jagratadeb2004@rediffmail.com"; // Reassigning accountEmail (allowed because it's declared with let)
accountPassword = "12345678910"; // Reassigning accountPassword (allowed because it's declared with var)
accountCity = "Silchar"; // Reassigning accountCity (allowed but not recommended due to implicit global declaration)

// Logging updated values in a table
console.table([accountID, accountEmail, accountPassword, accountCity]);
