const accountId = 144553
let accountEmail = "maaz@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "mma@mma.com"
accountPassword = "2121212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])