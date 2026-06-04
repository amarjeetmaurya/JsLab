const arr = [10, 20, 30];

arr.forEach((item) => {
  console.log(item);
});

// Can you break from forEach?
// ❌ No



const nums = [1, 2, 3, 4];

const op = nums.forEach((num) => {
  if (num === 2) {
    return; // ⚠️ This ONLY skips '2'. It does NOT stop the loop!
  }
  console.log(num);
});

console.log(op)