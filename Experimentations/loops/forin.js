const arr = [10, 20, 30];

for (const key in arr) {
  console.log(key);
}

const user = {
  name: "Amarjeet",
  age: 22
};

for (const key in user) {
  console.log(key);
  console.log(`Value: ${user[key]}`);
}