let guestList:string[] = ["Ali", "Abubakar", "Hassan", "Haider"];

console.log("Unfortunately! the new dinner table wont be arrived so we can invite only two guest.");

while(guestList.length>2){
    let removeGuest : string | undefined = guestList.pop();

    if (removeGuest !== undefined)  {
        console.log(`Sorry! ${removeGuest}, you can't invited for dinner.`)
    }
}

guestList.forEach(guest =>  {
    console.log(`Dear ${guest}, you are still invited to dinner.`)
})

guestList.splice(0,guestList.length);

console.log("Updated list of guest :", guestList);

