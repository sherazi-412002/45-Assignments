"use strict";
let pizzas = ["Peperoni", "Cuban", "BBQ Chicken"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} Pizza.`);
}
pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
for (let pizza of pizzas) {
    console.log(`I like ${pizza} Pizza.`);
}
console.log("I love Pizza!");
