// The Anatomy of .map()
// The .map() method takes a callback function as its argument. That function can accept three parameters:

// JavaScript
// const newArray = oldArray.map((currentItem, index, array) => {
//     // Return the new value for this position
// });
// currentItem: The actual element currently being processed (e.g., 10).

// index (Optional): The numerical position of that element (e.g., 0, 1, 2...).

// array (Optional): The original array .map() was called on.


// 1. Extracting Data from an API Response
console.log("1. Extracting Data from an API Response");
const apiUsers = [
    { id: 1, name: "Alice", email: "alice@dev.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@dev.com", role: "User" },
    { id: 3, name: "Charlie", email: "charlie@dev.com", role: "User" }
];

// Extract just the names into a clean array of strings
const usernames = apiUsers.map(user => user.name);

console.log(usernames); 
// Output: ["Alice", "Bob", "Charlie"]


// 2. Updating a Specific Item in an Array
console.log("\n2. Updating a Specific Item in an Array");
const cart = [
    { product: "Shoes", price: 100, qty: 1 },
    { product: "Shirt", price: 50, qty: 1 } // We want to update this one
];

const updatedCart = cart.map(item => {
    if (item.product === "Shirt") {
        // Return a copy of the object with updated quantity
        return { ...item, qty: item.qty + 1 }; 
    }
    return item; // Leave other items untouched
});

console.log(updatedCart);


// 3. Converting Raw Data into HTML/UI Components (The React Way)
console.log("3. Converting Raw Data into HTML/UI Components (The React Way)");
const tasks = ["Buy Milk", "Clean Room", "Code JS"];

// Map the strings into HTML list item strings
const htmlTasks = tasks.map((task, index) => {
    return `<li id="task-${index}">${task}</li>`;
});

console.log(htmlTasks);
/* Output:
[
  '<li id="task-0">Buy Milk</li>',
  '<li id="task-1">Clean Room</li>',
  '<li id="task-2">Code JS</li>'
]
*/

// The Golden Rules of .map()
// Rule 1: Always use return inside the callback. If you forget to return a value, your new array will just be filled with [undefined, undefined, undefined].

// Rule 2: It does NOT mutate. The original array remains completely untouched.

// Rule 3: Don't use it if you aren't using the result. If you don't care about the new array coming out of it, and you just want to log data or save something to a database, use a standard loop or .forEach() instead. Using .map() without saving the returned array wastes computer memory.


const result = [1, 2, 3].map(x => {
    console.log(x)
    if(x!=1) return x;
});
console.log(result)