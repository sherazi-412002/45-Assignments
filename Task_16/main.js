let guestList = ["Ali", "Abubakar", "Hassan"];
console.log("Its Great News! I found a bigg dinner table.");
//For adding guest in begining of an array
guestList.unshift("Shoaib");
//for adding guest in the center of an array
guestList.splice(guestList.length / 2, 0, "Haider");
//for adding guest at the end of an array
guestList.push("Hamza");
guestList.forEach(guest => {
    console.log(`Hello ${guest}, I would like to invite you to dinner at 9:00 PM!`);
});
export {};
