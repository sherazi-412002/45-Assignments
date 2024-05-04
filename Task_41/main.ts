
let magiciansName:string[] =["Harry Potter", "Ron Weaslsey", "Albus Dumbleader"]

function show_magicians(namesOfMagicians:string[]){
   namesOfMagicians.forEach(name=> {
        console.log(name);
   });
}

show_magicians(magiciansName);