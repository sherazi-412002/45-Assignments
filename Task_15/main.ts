
let guestList:string[] = ["Ali", "Abubakar", "Hassan", "Ousaf"];

//Not avilable
let unableToAttened = "Hassan";
console.log(`${unableToAttened} can't matke it to dinner`);
 
//Replacement
let newGuest = "Sohail Khan";
guestList[guestList.indexOf(unableToAttened)] = newGuest

//New Invitation
guestList.forEach(guest => {
    console.log(`Hello ${guest}, I would like to invite you to dinner at 9:00 PM!`);
})


