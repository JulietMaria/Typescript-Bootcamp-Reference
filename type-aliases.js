"use strict";
function printCarModel(model) {
    console.log(model);
}
printCarModel(2021);
function printCarDetails(myCar) {
    console.log(`My car is ${myCar.make}`);
    console.log(`My car was launched in ${myCar.model}`);
    if (myCar.sedan) {
        console.log(`My car is a sedan`);
    }
    else {
        console.log(`My car is not a sedan`);
    }
}
printCarDetails({
    model: 2021,
    make: "Honda",
    sedan: true
});
