//object#1
//Datatype of studentData object
interface student {
    name:string,
    rollNumber:number,
    fatherName:string,
    grade:number
}
//studentData object
let studentData:student = {
    name:"Ali",
    rollNumber:201,
    fatherName:"Ahmed",
    grade:7
}

//print studentData 
console.log(studentData);

//for line break b/w two objects
console.log("\n")


//object#2
//Data type of car object
interface car {
    maker:string,
    model:number,
    colour:string,
    automatic:boolean
}

//car object
let car:car ={
    maker:"Suzuki",
    model:2023,
    colour:"black",
    automatic:true
}

//print car
console.log(car);