"use strict";
let magiciansName = ["Harry Potter", "Ron Weaslsey", "Albus Dumbleader"];
function copyArray(array) {
    return [...array];
}
function make_great(addingPhrase) {
    for (let i = 0; i < addingPhrase.length; i++) {
        addingPhrase[i] = `The Great , ${addingPhrase[i]}`;
    }
}
function show_magicians(namesOfMagicians) {
    namesOfMagicians.forEach(name => {
        console.log(name);
    });
}
console.log('\nThis is Original Array:');
show_magicians(magiciansName);
const copyArrayNames = copyArray(magiciansName);
console.log('\n\nThis is modified Array:');
make_great(copyArrayNames);
show_magicians(copyArrayNames);
