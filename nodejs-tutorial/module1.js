// const mod = require("./module2.js")
// // mod()
// // mod()
// //Here mode is a function as we have a function in module2. It can be anything(an object, string, numbers, functions....)
// console.log(mod.message)
// console.log(mod.func())


//Till now it is not possible to execute a standalone function and a function inside the object. To execute both, they following way is used
const mod = require("./module2.js")
console.log(mod.exp1())
console.log(mod.exp2.message)
console.log(mod.exp2.number)
console.log(mod.exp2.func())
//as both the functions just console.logss a statement, in output console there will be undefined message popping out. In js it happens, when a function does not have a return statement

