const accountId = 144553
let accountEmail = "jay3375@gmail.com"
var accountPassword = "1234"
accountCity = "Udaipur"

// accountId = 2  //not allowed

accountEmail="jayesh3375@gmail.com"
accountPassword="12345"
accountCity = "Jaipur"
let accountState;

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope.
*/

/*
 If we declare a variable but not initialized it then it can be executed as undefined. 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])