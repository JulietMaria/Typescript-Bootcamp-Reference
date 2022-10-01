"use strict";
const cars = ["hyundai", "honda"];
const luckyNumbers = [1, 2, 3];
const answers = [true, false];
function printCarModels(models) {
    models.forEach(model => {
        console.log(model);
    });
    let upcomingModel = models[0] + 1;
    return upcomingModel;
}
let upcomingModel = printCarModels([2021, 2020, 2018]);
console.log("Next upcoming model is " + upcomingModel);
