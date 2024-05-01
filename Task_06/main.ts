let myName :string = "\tSyed  \n\tShoaib  \tSherazi";
console.log(`Name with white space and line break : "${myName}"`);

console.log(`Name after stripping : ${myName.trim().replace(/\s+/g,' ')}`);