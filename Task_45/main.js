"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function carsDetail(model, manufacturer, ...extraOptions) {
    const carInfo = Object.assign({ model,
        manufacturer }, Object.assign({ color: "red" }, { tyres: "Tiger" }, ...extraOptions));
    return carInfo;
}
;
console.log("Car Information!");
console.log(carsDetail('Honda', 'Honda Motors', { color: 'Black' }, { features: ['withAC', 'automatic'] }));
