
//declaring a person name
let person_name: string = "Syed shoaib sherazi";

//printing a person_name in different cases.

//lowercase
console.log("In lower case : ", person_name.toLowerCase());

//uppercase
console.log("In upper case : ", person_name.toUpperCase());

//titlecase
let title_case: string[] = person_name.split(" ");
let title_case_name: string = "";
for (let i = 0; i < title_case.length; i++) {
  title_case_name +=
    title_case[i].charAt(0).toUpperCase() +
    title_case[i].slice(1).toLowerCase() +
    " ";
}
console.log("In title case : ",title_case_name);




