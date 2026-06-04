// The Anatomy of .filter()
// Like .map(), .filter() takes a callback function. However, the callback function for .filter() must return a boolean value (true or false). This is called a predicate function.

// JavaScript
// const newArray = oldArray.filter((currentItem, index, array) => {
//     // Return true to KEEP the item, or false to THROW IT OUT
// });
// If you return true: The item is copied over to the new array.

// If you return false: The item is skipped and left behind.


// 3 Real-World Use Cases
// 1. Implementing a Search Bar
const searchInput = "apple";
const fruits = ["Apple", "Banana", "Pineapple", "Strawberry", "Grape"];

// Filter items that contain the search term (case-insensitive)
const searchResults = fruits.filter(fruit => {
    return fruit.toLowerCase().includes(searchInput.toLowerCase());
});

console.log(searchResults); 
// Output: ["Apple", "Pineapple"]


// 2. Deleting an Item (The React Pattern)
const todoList = [
    { id: 101, task: "Buy groceris" },
    { id: 102, task: "Fix buggy loop" }, // Imagine we want to delete this one
    { id: 103, task: "Gym session" }
];

const idToDelete = 102;

// Keep everything that does NOT match the deleted ID
const updatedTodos = todoList.filter(todo => todo.id !== idToDelete);

console.log(updatedTodos);
/* Output:
[
  { id: 101, task: 'Buy groceris' },
  { id: 103, task: 'Gym session' }
]
*/

// 3. Cleaning Up Messy API Data
const dirtyData = [24, null, 35, undefined, 42, "", 18];

// Clean out non-numbers
const cleanData = dirtyData.filter(item => typeof item === "number");

console.log(cleanData); 
// Output: [24, 35, 42, 18]

// ⚡ Power Move: Method Chaining
// Because both .map() and .filter() return brand-new arrays, we can pipe them together in a single chain.
const numbers = [1, 2, 3, 4, 5, 6];

const processed = numbers
    .filter(num => num % 2 === 0) // Step 1: Filters down to [2, 4, 6]
    .map(num => num * 2);         // Step 2: Doubles them to [4, 8, 12]

console.log(processed); // [4, 8, 12]
