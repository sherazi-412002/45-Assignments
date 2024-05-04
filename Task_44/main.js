"use strict";
function makeSandwitch(item) {
    console.log("\nMake your sandwitch with :");
    item.forEach(ingredients => console.log(ingredients));
    console.log("Enjoy your sandwitch!\n");
}
makeSandwitch(["Egg", "souces", "Ban"]);
makeSandwitch(["Tikki", "kabab"]);
makeSandwitch(["mirchi", "tikka",]);
