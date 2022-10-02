/*
?  The "Function" type

NOTES:
- The global type is denoted by Function in JavaScript 
- It describes properties like bind, call, apply, and other methods.

FYI:
A callback function is defined as a function passed into another function as an argument,
which is then invoked inside the outer function to complete the desirable routine or action.
 */


function printCarDetails(callback: Function) {

    // This has implicit return type "any". Hence it is unsafe.
    callback(2021, "BMW")
}

printCarDetails((model: number, make: string) => {
    console.log("Car model is " + model);
    console.log("Car mcompany is " + make)
})