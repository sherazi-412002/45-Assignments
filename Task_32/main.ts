let current_users : string[] = ["Admin", "Ali", "Zahid", "Nouman", "Haider"]

let new_users : string[] = ["Tayyab", "Wahab", "Haider", "Ousaf", "Ali"]


new_users.forEach(newUser => {
    let lowerCase : string = newUser.toLowerCase();

    if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
        console.log(`The user name "${newUser}" need to enter new user name.`)
    }else{
        console.log(`The user name "${newUser}" is avialable.`)
    }

})

