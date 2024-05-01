let placesToVisit : string[] = ["Saudi Arabia", "Turkey", "Oman", "Palestine", "England"];

//printing array in original order
console.log("Original Order :", placesToVisit);

//array in alphabetic order
console.log("Alphabetical Order :", placesToVisit.slice().sort());

//again printing array in original order without chnaging in original list
console.log("Original Order :", placesToVisit);

//array in reverse alphabetical order
console.log("Reverse Alphabetical Order :", placesToVisit.slice().sort().reverse());

//array is still in in original order
console.log("Original Order : ", placesToVisit);

//reverse the order of original list
console.log("Reversed order of original list :",placesToVisit.reverse());

//again reverse the list to show that it's back to its original order
console.log("Again Original Order :",placesToVisit.reverse());

//again in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order :",placesToVisit);

//again in reversed alphabetical order
placesToVisit.reverse();
console.log("Reversed Alphabetical Order :",placesToVisit);


