
let magiciansName:string[] =["Harry Potter", "Ron Weaslsey", "Albus Dumbleader"]

function copyArray(array:string[]){
    return [...array]
}


function make_great(addingPhrase:string[]){
    for (let i=0; i<addingPhrase.length; i++){
        addingPhrase[i] = `The Great , ${addingPhrase[i]}`
    }
}

function show_magicians(namesOfMagicians:string[]){
   namesOfMagicians.forEach(name=> {
    console.log(name)
});
}

console.log('\nThis is Original Array:');
show_magicians(magiciansName);

const copyArrayNames = copyArray(magiciansName)
console.log('\n\nThis is modified Array:');

make_great(copyArrayNames);
show_magicians(copyArrayNames);
