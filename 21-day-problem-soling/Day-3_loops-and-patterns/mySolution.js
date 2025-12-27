// console.log("Helo!!!");

// 1
for(let i=1; i<=5; i++) {
    let str = "";
    for(let j=1; j<=i; j++) {
        str+="*";
    }
    console.log(str);
}

console.log("+++++++++++++++++++");

// 2
for(let i=1; i<=5; i++) {
    let str = "";
    for(let j=5-i; j>=0; j--) {
        str+="*";
    }
    console.log(str);
}

console.log("+++++++++++++++++++");

// 3
for(let i=1; i<=5; i++) {
    let str = "";
    for(let j=1; j<=5*2-1; j++) {
        let center = 5;
        if(j>=center-(i-1) && j<=center+(i-1)) {
            str+="*";
        } else {
            str+=" ";
        }
    }
    console.log(str);
}

