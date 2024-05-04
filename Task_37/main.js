"use strict";
function make_shirt(size = "Large", text = "I love Typescript.") {
    console.log(`Creating a ${size} size shirt with the message: ${text}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I love python!");
