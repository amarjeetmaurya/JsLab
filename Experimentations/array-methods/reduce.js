// The Anatomy of .reduce()
// Unlike map and filter, .reduce() takes two arguments:

// A callback function (the machine that does the work).

// An initial value (the starting size of your snowball).

// The callback function also has a special first parameter called the accumulator.

// JavaScript
// const finalResult = oldArray.reduce((accumulator, currentItem) => {
//     // Return the updated accumulator for the next turn
// }, initialValue);
// accumulator: This holds the running total of whatever you've done so far.

// currentItem: The current element in the array you are looking at.

// initialValue: What the accumulator starts at on the very first loop.

const prices = [10, 20, 30];

const totalSum = prices.reduce((accumulator, currentItem) => {
    return accumulator + currentItem;
}, 100); // <- 0 is our starting initialValue

console.log(totalSum); // Output: 60


// Real-World Use Case: Tallying/Counting Grouped Data
const users = [
    { name: "Alice", role: "Admin" },
    { name: "Bob", role: "User" },
    { name: "Charlie", role: "User" },
    { name: "David", role: "Moderator" }
];

// We want to reduce this array into a single tally object: {}
const roleTally = users.reduce((tally, user) => {
    const role = user.role;
    
    // If the role doesn't exist in our object yet, set it to 0
    if (!tally[role]) {
        tally[role] = 0;
    }
    
    // Increment the count
    tally[role]++;
    
    // CRITICAL: Always return the object so the next turn can use it!
    return tally; 
}, {}); // <- Notice the initialValue is an empty object {}

console.log(roleTally);
/* Output:
{
  Admin: 1,
  User: 2,
  Moderator: 1
}
*/

// The Golden Rules of .reduce()
// Rule 1: ALWAYS return the accumulator. If you forget to write return inside your .reduce() callback, the next loop turn will receive undefined as the accumulator, and your code will instantly crash with an error.

// Rule 2: Always provide an initial value. Technically, JavaScript allows you to skip the initialValue. If you skip it, it automatically uses the first item of the array (index 0) as the starting accumulator. While this works fine for basic math, it will break completely if you are trying to reduce objects into strings, or arrays into objects. Always explicitly set it!