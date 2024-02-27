// console.log("Hey buddy! ")

// module.exports = function() {
//     console.log("Module function executed!");
// };
// module.exports = {
//     message: "Hey buddy",
//     number: 42,
//     func: function fun(){
//         console.log("Hello, I'm inside the function")
//     }
// }


//Till now it is not possible to execute a standalone function and a function inside the object. To execute both, they following way is used
function func1 (){
    console.log("Hey buddy")
}

const obj = {
    message: "Message 1",
    number: 216,
    func: function func2 (){
        console.log("I'm inside the function")
    }
}
module.exports={
    exp1: func1,
    exp2: obj
}