//Test 1
console.log("If strings are equal than predict true!");
let countryName:string = "Pakistan"
console.log(countryName == "Pakistan");


//Test 2
console.log("If strings are unequal than predict false!");
let countryName2:string = "Pakistan"
console.log(countryName == "India");


// Test 3
console.log("Testing Lower case.");
console.log("Apple".toLowerCase() == "apple");

// Test 4
console.log("Testing Lower case");
console.log("Apple".toLowerCase() == "Apple");

// Test 5
console.log("Testing Upper case");
console.log("Apple".toUpperCase() == "APPLE");

// Test 6
console.log("Testing Upper case");
console.log("Apple".toUpperCase() == "Apple");


//Test 7
console.log("Numerical tests")
console.log("If first number is greater than second.I predict true.(using greater than sign '>')")
console.log(10>8 ,"\n");


console.log("If first number is greater than second.I predict false.(usig less than sign '<')")
console.log(10<8 , "\n");


console.log("If both numbers are equal then print true otherwise false.")
let a = 65;
let b = 65;
console.log(a === b);
console.log(a >= b , "\n");


console.log("If both numbers are equal then print true otherwise false.")
let c = 10;
let d = 7;
console.log(d <= c);
console.log(c  === d );


// Test 11
console.log("Using && and || operators")
let num1 = 120;
let num2 = 450;
let num3 = 380;
let num4 = 1000;
console.log(num1>num2 || num3<num4);
console.log(num3>num4 || num4<num2);
console.log(num2>num1 && num3<num4);
console.log(num1==num2 && num2<num4);



// Test 12
console.log("Test whether an item in array")
let fruits1 : string[] = ['apple', 'banana','mango']
console.log("Is 'apple' in array?");
console.log(fruits1.includes("apple"));

//Test 13
console.log("Test whether an item in array")
let fruits2 : string[] = ['apple', 'banana','mango']
console.log("Is 'melon' in array?");
console.log(fruits2.includes("melon"));





