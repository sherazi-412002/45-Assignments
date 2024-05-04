"use strict";
let magiciansName = ["Harry Potter", "Ron Weaslsey", "Albus Dumbleader"];
function make_great(addingPhrase) {
    for (let i = 0; i < addingPhrase.length; i++) {
        magiciansName[i] = `The Great , ${addingPhrase[i]}`;
    }
}
function show_magicians(namesOfMagicians) {
    namesOfMagicians.forEach(name => {
        console.log(name);
    });
}
make_great(magiciansName);
show_magicians(magiciansName);
