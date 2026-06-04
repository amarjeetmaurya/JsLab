const arr = [4, 5, 7, 1, 3, 2];

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// Curly braces are not required for a single-line body
while (i) console.log(i--);

do {
  console.log(i++);
} while (i < 3);

// While a standard while loop checks the condition before running the code, a do-while loop guarantees the code runs at least once before checking the condition.


let password;
do {
    password = prompt("Enter password:");
} while (password.length < 8);

