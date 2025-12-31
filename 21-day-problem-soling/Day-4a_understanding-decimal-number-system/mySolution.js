// 1. **Split Number into Digits**
// * Input: `N = 12345`
//    * Output: `[1, 2, 3, 4, 5]`
// String(n).split("").map(Number)
function splitNum(n) {
  let arr = [];
  while (n !== 0) {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  }
  return arr.reverse();
}
console.log(splitNum(12345));

// 2. **Remove the Decimal Point Mathematically**
//    * Input: `N = 12.34`
//    * Output: `1234`
function removeDecimal(num) {
  while (num % 1 !== 0) {
    num = Number(num * 10).toFixed(10);
  }
  return Number(num);
}
console.log(removeDecimal(12.34));

// 3. **Separate Whole and Fractional Parts of a Number**
//    * Input: `N = 5.75`
//    * Output: `Whole = 5, Fraction = 0.75`

function separatePart(num) {
  let whole = Math.floor(num);
  let fraction = (num - whole).toFixed(10);
  return { whole, fraction };
}
console.log(separatePart(5.75));

// 4. **Count Whole and Fractional Digits Separately**
//    * Input: `N = 12.345`
//    * Output: `Whole Count = 2, Fraction Count = 3`

function countSeparatePart(num) {
  let whole = Math.floor(num);
  let fraction = (num - whole).toFixed(10);

  let countWhole = 0;
  let countFraction = 0;
  while (whole !== 0) {
    countWhole++;
    whole = Math.floor(whole / 10);
  }

  while(fraction%1!==0) {
    countFraction++;
    fraction=Number(fraction*10).toFixed(10);
  }
  return { countWhole, countFraction };
}
console.log(countSeparatePart(587.733433235));



// 5. **Generate a Decimal Number from Whole and Fractional Digits**
//    * Input: `Whole = [1, 2], Fraction = [3, 4]`
//    * Output: `12.34`

function createDecimal(whole, fraction) {
    let num = 0;
    let expand = 1;
    for(let i=whole.length; i>0 ; i--) {
        num += whole[i-1] * expand;
        expand*=10;
    }

    let exp = 10;
    for(let i=0; i<fraction.length ; i++) {
        console.log({i, num,expand })
        num = Number((num + (fraction[i] / exp)).toFixed(10));
        exp*=10;
    }
    return num;
}
console.log(createDecimal([1,2], [2,3,4]))